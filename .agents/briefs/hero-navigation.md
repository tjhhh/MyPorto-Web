# Hero and adaptive navigation

Targets: `src/app/_components/home/HeroSection.tsx`, `HeroPortrait.tsx`, `Navbar.tsx`, `Navbar.module.css`; navigation labels in `src/app/_data/home-data.ts`.
Mode: Persuade within an Experience portfolio. Technical evaluators should understand Fauzan's actual work, inspect selected projects, then contact him.

## Approved scope

User approved the editorial hero plan and then explicitly requested a full-width-to-rounded glass navbar with animated separation/rejoining on scroll. Keep actual Montserrat/JetBrains Mono, off-white/obsidian/maroon colors, MF mark, existing portrait and anchors, real project counts, and functional resume. No new dependencies, generated artwork, unverified availability claims, telemetry clock, unrelated section edits, or global visual-world replacement.

## Direction contract

THESIS: Personal engineering introduction and evidence-first actions; the navigation visibly detaches into smoked glass when the reader enters the work.

OWN-WORLD: Inherit the actual site's editorial palette/type and sharp hero actions. Rounded corners, smoked glass, and a modest shadow are explicitly approved surface-local exceptions for the floating navigation only; they do not redefine every container in DESIGN.md.

STORY: Understand web/mobile/IoT scope, open selected work, contact Fauzan. About/Work/Stack/Experience/Contact navigate existing section anchors; Resume opens the existing PDF.

FIRST VIEWPORT: A readable dark navbar, left-aligned two-to-three-line headline ('I build web, mobile, and connected systems.'), concise personal intro, primary 'View selected work' and secondary 'Get in touch'. A cleaner monochrome portrait occupies the right ~40%. One quiet credentials line replaces oversized stats; no duplicated ribbon or portrait telemetry.

FORM: User-selected local composition; no seed or concept round applies. One navbar remains mounted: full width/square at top; floating at scroll >=64px, returning only at <=16px (hysteresis). Desktop floating margins >=24px and max width1280px, ~12px top offset,24px radius; mobile12px margins,8px offset,20px radius. Smoked obsidian glass with18px blur and solid fallback. Reversible ~400ms exponential-ease frame morph; no scale distortion of text. The small navigation region alone may interpolate frame width/height; a fixed-height sticky outer slot prevents page reflow and scroll feedback. No per-frame React scroll progress. Mobile disclosure remains usable across morph; Escape/outside/link close, appropriate focus,44px controls. Reduced motion removes spatial transitions.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Acceptance

Inspect top/floating/return states at desktop1440 and user1567, tablet768/1024, mobile390/360. Test64/16 hysteresis, rapid reversal, fixed hero document position, active anchors, exactly one resume control at all widths, mobile opening/closing/Escape/outside/link, scrolling with menu open, keyboard focus, resize, deep-link initial state, reduced motion and fallback. Check loaded portrait/crop, responsive header without overflow, successful lint/TypeScript/build. Full-page captures start at document top; viewport captures prove sticky/scrolled behavior. No shipping raster changes; existing photo stays unchanged.

## Incumbent documentation

DESIGN.md's named fonts differ from actual layout.tsx (Montserrat/JetBrains Mono); preserve actual implementation and report pre-existing drift. Keep unrelated working-tree changes and existing Systems Matrix additions intact.
