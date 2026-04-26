export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="text-[52px] leading-[1.06] font-bold tracking-[-0.02em] text-on-surface md:text-[46px]">Educations</h2>
        <p className="mt-3 text-[18px] leading-[1.6] text-on-surface-variant">The rigorous training behind the craft.</p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="border border-outline-variant bg-surface-container-lowest p-7 md:col-span-2">
            <p className="font-space text-[17px] text-primary">[ ]</p>
            <h3 className="mt-5 max-w-full text-[32px] leading-[1.12] font-bold tracking-[-0.01em] text-on-surface break-words sm:text-[36px] md:text-[36px]">
              Software Engineer,
              <span className="block">Undergraduate 3rd Year.</span>
            </h3>
            <p className="mt-2 text-[17px] text-on-surface-variant">Telkom University</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">UI/UX Principles</span>
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">Software Architecture</span>
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">Database Design</span>
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">Web Development</span>
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">Mobile Development</span>
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">Project Management</span>
              <span className="border border-outline-variant bg-surface-container px-3 py-1 font-space text-[10px] tracking-[0.12em] text-on-surface uppercase">SW Quality Assurance</span>
            </div>
          </article>

          <article className="border border-primary bg-primary p-7 text-on-primary">
            <p className="font-space text-[17px]">+</p>
            <h3 className="mt-5 text-[40px] leading-[1.12] font-bold tracking-[-0.01em] md:text-[36px]">The Drive</h3>
            <p className="mt-3 text-[17px] leading-[1.6] text-[#cbead5]">
              I&apos;m driven by the pursuit of clarity and efficiency in every system I build.
              I believe great software is not just functional - it&apos;s structured, scalable, and thoughtfully designed.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
