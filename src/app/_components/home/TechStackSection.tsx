import type { TechStackCategory } from "@/app/_types/home";

type TechStackSectionProps = {
  categories: TechStackCategory[];
};

export function TechStackSection({ categories }: Readonly<TechStackSectionProps>) {
  const getLabelClassName = (label: string) => {
    if (label === "Frontend") {
      return "border-red-500/35 bg-red-500/10 text-red-700";
    }

    if (label === "Backend") {
      return "border-emerald-500/35 bg-emerald-500/10 text-emerald-700";
    }

    if (label === "Specializations") {
      return "border-yellow-500/35 bg-yellow-500/10 text-yellow-800";
    }

    return "border-outline-variant bg-surface-container text-on-surface-variant";
  };

  return (
    <section id="tech" className="scroll-mt-24 border-y border-surface-variant bg-surface-container-lowest py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4 md:gap-5 md:px-8">
        <div>
          <h2 className="text-[50px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface md:text-[44px]">Tech Stack</h2>
          <p className="mt-4 max-w-55 text-[17px] leading-[1.6] text-on-surface-variant">The tools and technologies I use to build my projects.</p>
        </div>

        {categories.map((category) => (
          <article key={category.label} className="border-b border-surface-variant pb-5">
            <p
              className={`inline-flex items-center border px-2.5 py-1 font-space text-[10px] tracking-[0.14em] uppercase ${getLabelClassName(category.label)}`}
            >
              {category.label}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {category.items.map((tech) => (
                <div key={`${category.label}-${tech.name}`} className="group flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-surface-variant bg-surface-container p-2 transition-transform duration-300 ease-out group-hover:scale-110">
                    <img src={tech.logo} alt={`${tech.name} logo`} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-[13px] text-on-surface-variant">{tech.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
