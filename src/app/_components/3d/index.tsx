"use client";

import dynamic from "next/dynamic";

export const DynamicTalisman = dynamic(
  () => import("./TalismanCanvas").then((mod) => mod.TalismanCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center w-full h-full min-h-[360px] border border-beige/20 bg-obsidian-surface text-beige/60 font-mono text-[10px] tracking-[0.18em] uppercase">
        <div className="h-6 w-6 border-2 border-beige/30 border-t-maroon-glow animate-spin mb-4" />
        <span>INITIALIZING TALISMAN.SYS...</span>
      </div>
    ),
  }
);
