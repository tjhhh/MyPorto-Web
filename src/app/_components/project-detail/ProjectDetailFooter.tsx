import Link from "next/link";

type ProjectDetailFooterLink = {
  label: string;
  href: string;
};

type ProjectDetailFooterProps = {
  copyrightLabel: string;
  links: ProjectDetailFooterLink[];
};

export function ProjectDetailFooter({ copyrightLabel, links }: Readonly<ProjectDetailFooterProps>) {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 md:flex-row md:items-center md:px-8">
        <span className="font-space text-[10px] uppercase tracking-[0.12em] text-primary">{copyrightLabel}</span>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              className="font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 ease-out hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}