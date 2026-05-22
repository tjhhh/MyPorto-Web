import Link from "next/link";

type ProjectDetailNavbarLink = {
  label: string;
  href: string;
};

type ProjectDetailNavbarProps = {
  projectName: string;
  navLinks: ProjectDetailNavbarLink[];
  backHref?: string;
  backLabel?: string;
  sectionLabel?: string;
};

export function ProjectDetailNavbar({
  projectName,
  navLinks,
  backHref = "/projects",
  backLabel = "Back to Projects",
  sectionLabel = "Portfolio",
}: Readonly<ProjectDetailNavbarProps>) {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-8 md:py-4">
        <div className="min-w-0">
          <p className="font-space text-[10px] uppercase tracking-[0.14em] text-on-surface-variant sm:text-[11px]">{sectionLabel}</p>
          <h1 className="truncate text-[18px] font-semibold text-on-surface sm:text-[20px]">{projectName}</h1>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="font-space text-[10px] uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-300 ease-out hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={backHref}
          className="inline-flex h-10 items-center border border-primary bg-primary px-4 font-space text-[10px] uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 ease-out hover:bg-primary-container"
        >
          {backLabel}
        </Link>
      </div>
    </header>
  );
}