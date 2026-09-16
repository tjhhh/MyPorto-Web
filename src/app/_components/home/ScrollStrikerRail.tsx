"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

export function ScrollStrikerRail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isGoal, setIsGoal] = useState(false);
  const [velocity, setVelocity] = useState(0);

  // Animation & Physics Refs
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const velocityRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      targetProgressRef.current = progress;

      // Calculate instant velocity
      const delta = scrollY - lastScrollYRef.current;
      velocityRef.current = Math.min(Math.abs(delta) / 12, 10);
      lastScrollYRef.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Canvas setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Color palette for fire / ember particles
    const emberColors = [
      "#F7F4EE", // Core white-hot
      "#FDE047", // Incandescent yellow
      "#F97316", // Flame orange
      "#EF4444", // Fiery red
      "#991B1B", // Deep crimson
      "#5A171F", // Burgundy monograph
    ];

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth lerp progress for buttery 60fps trajectory
      progressRef.current += (targetProgressRef.current - progressRef.current) * 0.14;
      const curProg = progressRef.current;
      setScrollProgress(curProg);

      // Dampen velocity over time
      velocityRef.current = Math.max(velocityRef.current - dt * 4, 0);
      setVelocity(velocityRef.current);

      // Trigger goal state near bottom
      const inGoal = curProg >= 0.95;
      setIsGoal(inGoal);

      // Calculate Ball position in pixel coordinates for particle spawning
      const railH = canvas.height;
      const startY = 135;
      const endY = railH - 120;
      const ballY = startY + (endY - startY) * curProg;
      const ballX = canvas.width / 2;

      // Spawn fire & ember particles when moving or fast
      if (curProg > 0.02 && curProg < 0.97 && velocityRef.current > 0.2) {
        const spawnCount = Math.min(Math.floor(velocityRef.current * 2.5), 8);
        for (let i = 0; i < spawnCount; i++) {
          const color =
            emberColors[Math.floor(Math.random() * emberColors.length)];
          particlesRef.current.push({
            x: ballX + (Math.random() - 0.5) * 14,
            y: ballY + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 1.6,
            vy: -Math.random() * 2.5 - 1.2, // Drift upwards like real fire
            size: Math.random() * 3.8 + 1.2,
            life: 1.0,
            maxLife: Math.random() * 0.4 + 0.3,
            color,
          });
        }
      }

      // Render Canvas Particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // If moving fast, draw a faint glowing heat plume behind the ball
      if (curProg > 0.03 && curProg < 0.96 && velocityRef.current > 0.8) {
        const glowRad = Math.min(velocityRef.current * 4 + 14, 38);
        const grad = ctx.createRadialGradient(
          ballX,
          ballY,
          2,
          ballX,
          ballY,
          glowRad
        );
        grad.addColorStop(0, "rgba(249, 115, 22, 0.45)");
        grad.addColorStop(0.5, "rgba(90, 23, 31, 0.25)");
        grad.addColorStop(1, "rgba(90, 23, 31, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ballX, ballY, glowRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw individual particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= dt / p.maxLife;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCanvasSize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  // Striker states based on scrollProgress
  const isKicked = scrollProgress >= 0.015;
  const isFollowThrough = scrollProgress >= 0.045;
  // Striker stays at the kickoff spot and fades out as ball travels down
  const strikerOpacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.04) * 12));

  // Goal net visibility fades in as ball approaches
  const netOpacity = scrollProgress > 0.75 ? 1 : 0.45;

  // Ball spin angle
  const ballRotation = scrollProgress * 360 * 6;

  const handleReturnToKickoff = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      ref={containerRef}
      aria-hidden="true"
      className="fixed right-3 xl:right-7 top-0 bottom-0 w-20 xl:w-24 z-30 pointer-events-none hidden lg:flex flex-col items-center select-none"
    >
      {/* Background Rail Track Line */}
      <div className="absolute top-20 bottom-16 left-1/2 -translate-x-1/2 w-[1px] border-r border-dashed border-beige/25" />

      {/* Particle Canvas for Fire & Embers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* TOP: THE STRIKER SILHOUETTE */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300"
        style={{
          opacity: strikerOpacity,
          pointerEvents: strikerOpacity > 0.5 ? "auto" : "none",
        }}
      >
        {/* Telemetry Header */}
        <div className="mb-2 flex items-center gap-1 font-mono text-[8px] tracking-[0.2em] text-ink-muted/70 uppercase">
          <span className="h-1 w-1 rounded-full bg-maroon animate-pulse" />
          <span>STRIKER // 09</span>
        </div>

        {/* Striker Vector Silhouette */}
        <div
          className={`relative transition-transform duration-300 ${
            isFollowThrough
              ? "scale-95 opacity-90"
              : isKicked
              ? "scale-105"
              : "scale-100"
          }`}
        >
          <svg
            width="44"
            height="56"
            viewBox="0 0 44 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-maroon filter drop-shadow-[0_2px_4px_rgba(90,23,31,0.2)]"
          >
            {/* Head */}
            <circle cx="21" cy="7" r="4.5" fill="currentColor" />

            {/* Torso & Athletic Jersey */}
            <path
              d="M17 12C18.5 12 23 12.5 25 14L23 26H16L15 16C15 13.5 16 12 17 12Z"
              fill="currentColor"
            />

            {/* Arms (Dynamic balance pose) */}
            <path
              d="M17 14L10 19L8 18L15 13"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M23 14L30 16L32 20"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Plant Leg (Left Leg firmly planted) */}
            <path
              d="M17 26L16 38L13 48L9 48.5"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Kicking Leg (Right Leg) with Dynamic Swings */}
            {!isKicked ? (
              // Wind-up: Leg drawn far backward
              <path
                d="M22 26L28 34L33 30L37 32"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : !isFollowThrough ? (
              // Impact: Leg strikes forward at ball
              <path
                d="M22 26L24 37L29 46L34 44"
                stroke="currentColor"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              // Follow-through: Leg extended forward high
              <path
                d="M22 26L26 36L34 43L39 39"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>

          {/* Impact Shockwave Ring on kick moment */}
          {isKicked && !isFollowThrough && (
            <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border border-amber-500 animate-ping pointer-events-none" />
          )}
        </div>
      </div>

      {/* THE FLYING FUTSAL BALL */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: `calc(135px + (100% - 255px) * ${scrollProgress})`,
          transition: "transform 0.05s linear",
        }}
      >
        {/* Ball Container */}
        <div className="relative flex items-center justify-center">
          {/* Flame Core Glow when moving */}
          {scrollProgress > 0.02 && scrollProgress < 0.96 && velocity > 0.3 && (
            <div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-t from-red-600 via-amber-500 to-amber-200 blur-[2px] opacity-80 animate-pulse pointer-events-none"
              style={{
                transform: `scale(${1 + Math.min(velocity * 0.12, 0.6)})`,
              }}
            />
          )}

          {/* Geometric Futsal Ball SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            style={{
              transform: `rotate(${ballRotation}deg)`,
            }}
          >
            {/* Outer Ball Body */}
            <circle cx="12" cy="12" r="11" fill="#F7F4EE" stroke="#5A171F" strokeWidth="1.2" />

            {/* Central Pentagon (Classic Football/Futsal Pattern) */}
            <polygon
              points="12,7 15.5,9.5 14,14 10,14 8.5,9.5"
              fill="#5A171F"
            />

            {/* Connecting Seam Ribs */}
            <line x1="12" y1="7" x2="12" y2="1.5" stroke="#5A171F" strokeWidth="1.1" />
            <line x1="15.5" y1="9.5" x2="20.5" y2="7.5" stroke="#5A171F" strokeWidth="1.1" />
            <line x1="14" y1="14" x2="18.5" y2="18.5" stroke="#5A171F" strokeWidth="1.1" />
            <line x1="10" y1="14" x2="5.5" y2="18.5" stroke="#5A171F" strokeWidth="1.1" />
            <line x1="8.5" y1="9.5" x2="3.5" y2="7.5" stroke="#5A171F" strokeWidth="1.1" />

            {/* Subtle Edge Highlight */}
            <circle cx="12" cy="12" r="10" stroke="#D8C5A5" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* BOTTOM: THE GOAL NET */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300"
        style={{
          opacity: netOpacity,
          pointerEvents: isGoal ? "auto" : "none",
        }}
      >
        {/* Goal Net Blueprint SVG */}
        <div
          className={`relative transition-all duration-300 ${
            isGoal
              ? "scale-105 filter drop-shadow-[0_0_14px_rgba(239,68,68,0.5)] cursor-pointer"
              : "scale-100"
          }`}
          onClick={isGoal ? handleReturnToKickoff : undefined}
          title={isGoal ? "Kick Off Again (Return to Top)" : undefined}
        >
          <svg
            width="54"
            height="44"
            viewBox="0 0 54 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-beige filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          >
            {/* Isometric Goal Posts & Crossbar */}
            <path
              d="M7 40V12H47V40"
              stroke="#D8C5A5"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Back Depth Struts */}
            <path
              d="M7 12L15 5H39L47 12"
              stroke="#D8C5A5"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M15 5V32L7 40"
              stroke="#D8C5A5"
              strokeWidth="1.4"
            />
            <path
              d="M39 5V32L47 40"
              stroke="#D8C5A5"
              strokeWidth="1.4"
            />
            <path
              d="M15 32H39"
              stroke="#D8C5A5"
              strokeWidth="1.4"
            />

            {/* Net Mesh Cord Lines */}
            <g
              opacity="0.5"
              stroke="#D8C5A5"
              strokeWidth="0.75"
              className={isGoal ? "animate-pulse stroke-amber-400" : ""}
            >
              <line x1="12" y1="12" x2="12" y2="40" />
              <line x1="17" y1="12" x2="17" y2="40" />
              <line x1="22" y1="12" x2="22" y2="40" />
              <line x1="27" y1="12" x2="27" y2="40" />
              <line x1="32" y1="12" x2="32" y2="40" />
              <line x1="37" y1="12" x2="37" y2="40" />
              <line x1="42" y1="12" x2="42" y2="40" />

              <line x1="7" y1="18" x2="47" y2="18" />
              <line x1="7" y1="24" x2="47" y2="24" />
              <line x1="7" y1="30" x2="47" y2="30" />
              <line x1="7" y1="36" x2="47" y2="36" />
            </g>

            {/* Net impact reaction bulge when ball is scored */}
            {isGoal && (
              <path
                d="M20 22 Q 27 29 34 22"
                stroke="#EF4444"
                strokeWidth="2.2"
                fill="none"
              />
            )}
          </svg>

          {/* Goal Net Ground Baseline */}
          <div className="w-14 h-[1px] bg-beige/40 mt-1" />
        </div>

        {/* Telemetry Stamp on Goal (Clickable to Replay / Return to Zenith) */}
        <button
          type="button"
          onClick={handleReturnToKickoff}
          className={`mt-2 transition-all duration-300 flex flex-col items-center group cursor-pointer focus:outline-none ${
            isGoal
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-1 scale-90 pointer-events-none"
          }`}
          title="Kick Off Again (Return to Top)"
        >
          <div className="border border-maroon bg-maroon px-2 py-0.5 shadow-md group-hover:bg-maroon-dark transition-colors">
            <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-milky-white uppercase">
              ⚡ GOAL // 90+2&apos;
            </span>
          </div>
          <span className="font-mono text-[7px] tracking-[0.16em] text-cream-dark/70 group-hover:text-amber-400 uppercase mt-0.5 transition-colors">
            [ KICK OFF AGAIN ↑ ]
          </span>
        </button>
      </div>
    </aside>
  );
}
