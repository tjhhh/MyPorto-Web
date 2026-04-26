import type { SocialLink } from "@/app/_types/home";

type SiteFooterProps = {
  socialLinks: SocialLink[];
};

export function SiteFooter({ socialLinks }: Readonly<SiteFooterProps>) {
  return (
    <footer className="bg-surface-container-lowest py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:items-center md:px-8 md:text-left">
        <p className="font-space text-[10px] tracking-[0.16em] text-on-surface-variant uppercase">2026 Portfolio. Muhammad Fauzan.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-space text-[10px] tracking-[0.16em] text-on-surface-variant uppercase md:justify-end">
          {socialLinks.map((link) => (
            <a key={link.label} className="transition-colors hover:text-primary" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
