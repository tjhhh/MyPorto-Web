"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Eye, Layers, Orbit } from "lucide-react";

type RenderMode = "solid" | "wireframe" | "points";

export function TalismanCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<RenderMode>("solid");
  const [isInteracting, setIsInteracting] = useState(false);
  const [coordinates, setCoordinates] = useState({ pitch: 18, yaw: 42 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let animationFrameId: number;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 4. Lighting - Architectural lighting with warm beige key & burgundy rim
    const ambientLight = new THREE.AmbientLight(0xfff6ee, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd8c5a5, 3.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7b232e, 4.0);
    rimLight.position.set(-4, -3, -2);
    scene.add(rimLight);

    const topFill = new THREE.PointLight(0xf7f4ee, 2.0, 10);
    topFill.position.set(0, 4, 2);
    scene.add(topFill);

    // 5. Geometries & Meshes
    // Main Group
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);

    // Primary Polyhedral Core - Faceted Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(1.35, 0); // Crisp low-poly faceted icosahedron

    // Solid Lacquer Material
    const solidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x5a171f, // Deep Burgundy / Maroon
      emissive: 0x1f060a,
      roughness: 0.18,
      metalness: 0.88,
      clearcoat: 0.95,
      clearcoatRoughness: 0.08,
      reflectivity: 0.9,
      flatShading: true,
    });

    // Wireframe Material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd8c5a5, // Warm Beige
      wireframe: true,
      wireframeLinewidth: 2,
    });

    // Points Material
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xd8c5a5,
      size: 0.06,
      transparent: true,
      opacity: 0.9,
    });

    const solidMesh = new THREE.Mesh(coreGeometry, solidMaterial);
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    const pointsMesh = new THREE.Points(coreGeometry, pointsMaterial);

    artifactGroup.add(solidMesh);

    // Outer Precision Edge Lattice (gives crisp gold/beige hairline edges on solid facets)
    const edgesGeometry = new THREE.EdgesGeometry(coreGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({
      color: 0xd8c5a5,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.65,
    });
    const edgeLines = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    artifactGroup.add(edgeLines);

    // Inner Architectural Core (Nested Octahedron)
    const innerGeometry = new THREE.OctahedronGeometry(0.8, 0);
    const innerEdges = new THREE.EdgesGeometry(innerGeometry);
    const innerMaterial = new THREE.LineBasicMaterial({
      color: 0xede2ce,
      transparent: true,
      opacity: 0.45,
    });
    const innerCore = new THREE.LineSegments(innerEdges, innerMaterial);
    artifactGroup.add(innerCore);

    // Orbital Meridian Rings (representing systemic coordinate axes)
    const ringGeometry = new THREE.TorusGeometry(1.85, 0.008, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xd8c5a5,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    artifactGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    artifactGroup.add(ring2);

    // 6. Interaction Physics & Spring Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0.4;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        targetRotationY += deltaX * 0.012;
        targetRotationX += deltaY * 0.012;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      } else {
        mouseX = x;
        mouseY = y;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
      container.setPointerCapture(e.pointerId);
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      setIsInteracting(false);
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);

    // 7. Viewport Visibility Culling (Pause render when offscreen)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Resize handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // 9. Animation Loop
    let clock = new THREE.Clock();
    let frameCounter = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();

      if (!prefersReducedMotion && !isDragging) {
        targetRotationY += 0.35 * delta;
        targetRotationX = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
      }

      // Smooth inertia lerping
      const lerpFactor = 0.07;
      artifactGroup.rotation.y +=
        (targetRotationY + mouseX * 0.4 - artifactGroup.rotation.y) * lerpFactor;
      artifactGroup.rotation.x +=
        (targetRotationX - mouseY * 0.4 - artifactGroup.rotation.x) * lerpFactor;

      // Subtle counter-rotation for nested core and rings
      innerCore.rotation.y -= 0.5 * delta;
      innerCore.rotation.x += 0.2 * delta;
      ring1.rotation.z += 0.15 * delta;
      ring2.rotation.x += 0.1 * delta;

      // Throttle coordinate telemetry updates
      frameCounter++;
      if (frameCounter % 15 === 0) {
        const pitchVal = Math.round(
          ((((artifactGroup.rotation.x * 180) / Math.PI) % 360) + 360) % 360
        );
        const yawVal = Math.round(
          ((((artifactGroup.rotation.y * 180) / Math.PI) % 360) + 360) % 360
        );
        setCoordinates({ pitch: pitchVal, yaw: yawVal });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);

      coreGeometry.dispose();
      innerGeometry.dispose();
      edgesGeometry.dispose();
      innerEdges.dispose();
      ringGeometry.dispose();
      solidMaterial.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      edgesMaterial.dispose();
      innerMaterial.dispose();
      ringMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update render mode switch
  const handleModeChange = (mode: RenderMode) => {
    setRenderMode(mode);
    const container = containerRef.current;
    if (!container) return;
    // Dispatched via DOM attribute to trigger visual style or handle toggle
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px] select-none">
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        aria-label="Interactive 3D Polyhedral Engineering Talisman"
        role="img"
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-300 ${
          isInteracting ? "scale-[1.02]" : "scale-100"
        }`}
        style={{ touchAction: "none" }}
      />

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        {/* Telemetry Coordinate Readout */}
        <div className="flex items-center gap-3 px-3 py-1.5 border border-beige/25 bg-obsidian/85 backdrop-blur-md text-beige font-mono text-[10px] tracking-[0.14em] uppercase">
          <span className="flex h-2 w-2 rounded-full bg-maroon-glow animate-pulse-subtle" />
          <span>TALISMAN.SYS</span>
          <span className="text-beige/60">
            θ:{coordinates.pitch}° ψ:{coordinates.yaw}°
          </span>
          <span className="hidden sm:inline text-beige/40">Δ: 60FPS</span>
        </div>

        {/* Drag Hint */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 border border-beige/15 bg-obsidian/75 backdrop-blur-md text-beige/70 font-mono text-[9px] tracking-[0.12em] uppercase">
          <span>DRAG TO ROTATE</span>
        </div>
      </div>
    </div>
  );
}
