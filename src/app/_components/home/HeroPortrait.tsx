"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface HeroPortraitProps {
  imageSrc: string;
  name: string;
}

export function HeroPortrait({ imageSrc, name }: HeroPortraitProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-4/5 w-full overflow-hidden border border-obsidian/20 bg-surface-container-low">
      {hasError ? (
        <div
          role="status"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-ink-secondary"
        >
          <User aria-hidden="true" className="h-10 w-10 text-ink-muted" />
          <p className="font-sans text-base font-semibold text-ink">{name}</p>
          <p className="font-sans text-sm">Portrait unavailable</p>
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={`Black-and-white portrait of ${name} outdoors`}
          fill
          sizes="(max-width: 467px) calc(100vw - 48px), (max-width: 639px) 420px, (max-width: 1023px) min(420px, calc(100vw - 64px)), (max-width: 1279px) calc(41.667vw - 47px), 420px"
          preload
          // A fixed crop removes excess street and leg room without animating the photo.
          className="origin-[50%_65%] scale-150 object-cover object-[50%_65%] grayscale"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
