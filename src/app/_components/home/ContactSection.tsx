"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, MapPin, Radio } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "muhfauzann040@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-beige/35 bg-obsidian text-milky-white py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="border border-beige/30 bg-obsidian-surface p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Corner Precision Accents */}
          <div className="absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-beige/50 pointer-events-none" />
          <div className="absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-beige/50 pointer-events-none" />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-beige/50 pointer-events-none" />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-beige/50 pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-milky-white/15 pb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-cream-dark/70">
            <div className="flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-maroon-glow animate-pulse" />
              <span>COMMUNICATION TERMINAL // ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-cream-dark/50">
              <MapPin className="h-3 w-3" />
              <span>BANDUNG, JAWA BARAT [UTC+7]</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-[40px] leading-[1.04] font-bold text-milky-white sm:text-[54px] lg:text-[62px]">
                Have ambitious problems to solve?{" "}
                <span className="italic text-beige font-normal">
                  Let&apos;s hire me.
                </span>
              </h2>

              <p className="mt-6 max-w-xl font-sans text-[16px] leading-[1.7] text-beige/80 sm:text-[17px]">
                From zero-to-one architecture to shipping resilient fullstack platforms — I&apos;m ready to contribute immediately. Drop an email and let&apos;s start the conversation.
              </p>

              {/* Status Badge */}
              <div className="mt-8 inline-flex items-center gap-3 border border-milky-white/15 bg-obsidian-card px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase text-cream-dark">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>STATUS: READY TO JOIN YOUR TEAM</span>
              </div>
            </div>

            {/* Right Action Hub */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Mail Card */}
              <div className="border border-milky-white/15 bg-obsidian-card p-6">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream-dark/50">
                  PRIMARY DISPATCH CHANNEL:
                </p>
                <div className="mt-3 flex items-center justify-between gap-3 border-b border-milky-white/10 pb-3">
                  <span className="font-mono text-[13px] sm:text-[14px] text-milky-white font-medium break-all">
                    {email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 border border-milky-white/20 px-2.5 py-1 font-mono text-[9px] tracking-[0.12em] uppercase text-cream-dark hover:border-milky-white hover:text-milky-white transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-5">
                  <a
                    href={`mailto:${email}?subject=Hiring%20Inquiry%20%E2%80%94%20Let%27s%20Work%20Together`}
                    className="inline-flex w-full items-center justify-center gap-2 border border-maroon bg-maroon py-3.5 font-mono text-[11px] tracking-[0.18em] uppercase text-milky-white transition-all duration-300 hover:bg-maroon-glow hover:border-maroon-glow shadow-md"
                  >
                    <span>Let&apos;s Hire Me</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Social Channels */}
              <div className="grid grid-cols-3 gap-3 font-mono text-[10px] tracking-[0.16em] uppercase">
                <a
                  href="https://github.com/tjhhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 border border-milky-white/15 bg-obsidian-card p-3.5 text-cream-dark hover:border-milky-white/50 hover:text-milky-white transition-all duration-200"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/mffauzaannn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 border border-milky-white/15 bg-obsidian-card p-3.5 text-cream-dark hover:border-milky-white/50 hover:text-milky-white transition-all duration-200"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="https://instagram.com/mffauzaannn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 border border-milky-white/15 bg-obsidian-card p-3.5 text-cream-dark hover:border-milky-white/50 hover:text-milky-white transition-all duration-200"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
