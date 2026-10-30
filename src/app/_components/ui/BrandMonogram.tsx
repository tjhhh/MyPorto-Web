import Image from "next/image";

interface BrandMonogramProps {
  size?: number;
  className?: string;
}

export function BrandMonogram({
  size = 32,
  className = "",
}: BrandMonogramProps) {
  return (
    <Image
      src="/icon.svg?v=mf-cut-grotesk"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      unoptimized
      draggable={false}
      className={`inline-block shrink-0 select-none ${className}`}
    />
  );
}
