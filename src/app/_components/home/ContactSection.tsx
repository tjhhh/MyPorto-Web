export function ContactSection() {
  return (
    <section id="contact" className="ronin-polkadot scroll-mt-24 border-y border-surface-variant py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 text-center md:px-8">
        <h2 className="text-[52px] leading-[1.08] font-bold tracking-[-0.02em] text-on-surface md:text-[46px]">Initiate Contact</h2>
        <p className="mx-auto mt-5 max-w-140 text-[18px] leading-[1.6] text-on-surface-variant">
          Currently open for new opportunities and collaborations. Seeking environments that value precision and strong engineering principles.
        </p>
        <a
          href="mailto:muhfauzann040@gmail.com"
          className="mt-8 inline-flex border border-primary bg-primary px-9 py-3 font-space text-[12px] tracking-[0.14em] text-on-primary uppercase transition-colors duration-400 ease-in-out hover:bg-primary-container"
        >
          Send Dispatch
        </a>
        <div className="mt-6">
          <a className="font-space text-[10px] tracking-[0.16em] text-on-surface-variant uppercase transition-colors hover:text-primary" href="https://instagram.com/mffauzaannn">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
