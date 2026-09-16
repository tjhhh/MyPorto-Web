# Design System: Architectural Monograph

<!-- impeccable:design-schema 1 -->

## World

- **Aesthetic**: Editorial Monograph × Architectural Rigor × Digital Craftsmanship × Brutalist Discipline.
- **Thesis**: Replaces generic developer portfolio templates and AI slop with an authored, high-tension publication experience. High-contrast typography, deep maroon lacquered fields, physical digital materials, and asymmetric Detail chapters.

## Color Tokens

- **Maroon Primary**: `#5A171F` — Dominant character identity, primary action buttons, 3D core material.
- **Maroon Dark**: `#351015` — Deep tonal contrast, container borders, hover targets.
- **Maroon Deep**: `#20070B` — Shadow depth, high-contrast ink.
- **Maroon Glow**: `#7B232E` — Interactive accent, pulsing telemetry, active borders.
- **Warm Beige**: `#D8C5A5` — Precision dividing hairlines, secondary labels, coordinate telemetry.
- **Pale Champagne**: `#EDE2CE` — Container fills, subtle tag backdrops.
- **Milky Off-White**: `#F7F4EE` — Light editorial canvas, tactile paper ground.
- **Obsidian Black**: `#12100E` — Deep space canvas for dark chapters, hero 3D container, navigation dock, terminal footer.
- **Obsidian Surface**: `#181513` — Card backgrounds, recessed viewports.
- **Ink Primary**: `#12100E` — High-contrast display type and headings.
- **Ink Secondary**: `#4A4440` — Body copy, reading measure (65–75ch).

## Typography

- **Display**: `Playfair Display` (`--font-display`, serif) — Monumental headlines, sculptural chapter numerals, and authoritative editorial statements.
- **Sans**: `Plus Jakarta Sans` (`--font-sans`, grotesk) — Crisp structural UI, body narrative, high-density metadata.
- **Mono**: `JetBrains Mono` (`--font-mono`, monospaced) — Coordinates, timestamps, status indicators, commit telemetry, and technical tags.
- **Tracking Floor**: `-0.03em` on display headings; `+0.16em` on uppercase micro-metadata.

## Spacing & Elevation

- **Borders**: 1px solid hairlines in warm beige (`rgba(216, 197, 165, 0.35)`). Zero heavy drop shadows; depth is achieved through color blocking and crisp material transitions.
- **Radii**: Sharp, architectural 0px to 2px for frames and buttons. Rounded pills are banned for structural containers.
- **Grids**: Asymmetric editorial arrangements (e.g. 7-column / 5-column split), alternating visual dominance per chapter.

## 3D Artifact

- **Subject**: "The Polyhedral Talisman" — Procedural icosahedron with physical burgundy lacquer (`MeshPhysicalMaterial`), obsidian facets, and nested warm beige coordinate wireframe core.
- **Interaction**: Pointer spring tracking, drag-to-rotate, viewport visibility culling via `IntersectionObserver`, `prefers-reduced-motion` compliance.

## Motion Grammar

- **Easing**: Exponential ease-out `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Duration**: Fast, responsive transitions (200ms–350ms) for UI states; gentle slow ambient rotation (0.35 rad/s) for the 3D talisman.
- **Restraint**: Motion serves wayfinding and tactile feedback; no bouncing, no decorative scroll hijacking.
