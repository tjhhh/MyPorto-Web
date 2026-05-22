import Image from "next/image";

export function HeroSection() {
  return (
    <section id="about" className="ronin-polkadot scroll-mt-24 border-b border-surface-variant">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="font-space text-[11px] tracking-[0.16em] text-on-surface-variant uppercase">Disciplined Craftsmanship</p>
          <h1 className="mt-4 max-w-135 text-[46px] leading-[1.04] font-extrabold tracking-tight text-on-surface md:text-[64px]">
            Building scalable digital solutions with <span className="text-primary">clarity and precision.</span>
          </h1>
          <p className="mt-6 max-w-125 text-[18px] leading-[1.6] text-on-surface-variant">
            I&apos;m a Software Engineering student focused on developing efficient, well-structured, and user-centered applications. I turn complex ideas into clean and functional products.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-space text-[12px] tracking-[0.12em] text-on-primary uppercase transition-colors duration-400 ease-in-out hover:bg-primary-container"
            >
              Explore My Work -&gt;
            </a>
          </div>
        </div>

        <div className="relative self-center border border-surface-variant bg-surface-container-lowest h-105 w-full md:h-125">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRgdsbPjAfgn-9XJqCacfc7dCWCNB0CZ_CGYGAs-GLfbfAsTo4KsMfOtkUy0HetDuRhkDCRYhoZR9OA9JrROLFNzy-o7LzlsvrAmzU_hDTXI85OuN7OZP1wBqRAHqfn5Q0r8WGtcbYtDogbpbBkAjCMrxl4cAHwv1O59gaZ4TcFFHqEA8iUGrBJHto4NHIqo6AXjIw7hoDYI7_nu-m-12hJcre_3m2D6crBbLpK4oBJuG0WMi4HRWHVhra66-5aAftLmyKn6V05Jgf"
            alt="Interface preview"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
