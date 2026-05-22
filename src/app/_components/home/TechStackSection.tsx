import Image from "next/image";
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

  const getMarqueeDirectionClassName = (label: string) => {
    if (label === "Backend") {
      return "tech-marquee-track-left";
    }

    return "tech-marquee-track-right";
  };

  return (
    <section id="tech" className="scroll-mt-24 border-y border-surface-variant bg-surface-container-lowest py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-9 text-center md:mb-12">
          <h2 className="text-[50px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface md:text-[44px]">Tech Stack</h2>
          <p className="mx-auto mt-4 max-w-80 text-[17px] leading-[1.6] text-on-surface-variant">The tools and technologies I use to build my projects.</p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => (
            <article key={category.label} className="border-b border-surface-variant pb-5">
              <div className="flex flex-col gap-4">
                <p
                  className={`inline-flex w-fit self-center items-center border px-2.5 py-1 font-space text-[10px] tracking-[0.14em] uppercase ${getLabelClassName(category.label)}`}
                >
                  {category.label}
                </p>
                <div className="tech-marquee flex-1">
                  <div className={`tech-marquee-track ${getMarqueeDirectionClassName(category.label)}`}>
                    {[0, 1].map((copyIndex) => (
                      <div key={`${category.label}-copy-${copyIndex}`} className="tech-marquee-content" aria-hidden={copyIndex === 1}>
                        {category.items.map((tech) => (
                          <div key={`${category.label}-${tech.name}-${copyIndex}`} className="group flex shrink-0 items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-surface-variant bg-surface-container transition-transform duration-300 ease-out group-hover:scale-110">
                              <Image src={tech.logo} alt={`${tech.name} logo`} width={24} height={24} className="object-contain" />
                            </div>
                            <span className="text-[13px] text-on-surface-variant">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
