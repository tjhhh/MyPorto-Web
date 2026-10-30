# Systems Matrix

Target: `src/app/_components/home/TechStackSection.tsx` (`/#tech`).
Visitor mode: Read, within an Experience-mode portfolio. Technical evaluators need to scan technologies and understand their real uses, not interpret decorative verification labels.

## Approved scope

The user approved the three-column category index plan on 2026-10-30. Keep the site's existing off-white/maroon palette, actual fonts, section anchor, all listed technologies (currently 22 after the requested additions), English UI, category filtering, and expansion/collapse. No new dependencies, invented proficiency scores, project claims, or unrelated edits.

## Direction contract

**THESIS:** An engineering stack index, not eighteen boxed cards. Two entries from each category expose breadth immediately; real uses replace repeated production-status claims.

**OWN-WORLD:** Inherit the Architectural Monograph brand: off-white ground, obsidian headings, readable dark secondary copy, maroon controls, thin beige rules, square-edged controls, and the existing sans/mono fonts. No global token or font changes.

**STORY:** Read the purpose, see Frontend/Backend/Tools at once, filter by category, then expand for the complete stack.

**FIRST VIEWPORT:** Left-aligned Systems Matrix title and a short introduction; horizontal, scrollable category filters; three open category columns on desktop, two on tablet, one on mobile. Each entry has an unboxed original logo, a 16–18px name, and concise 14–16px usage copy. A result count and expansion action close the index.

**FORM:** User-selected local composition from the approved plan, not a new visual world; no concept seed applies. The signature interaction is a stable filter rail with explicit active state and instant category results; only control colors/chevron transition (150–250ms), with reduced-motion support. All shows two entries per category initially; an individual category shows up to six. Expanding shows all matching entries; switching category resets expansion.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification

Check actual rendering at 1440px, the supplied screenshot width (1567px), and 390px/360px mobile, plus tablet layout. Verify all filter counts, representative initial six entries, full expansion of all listed technologies, collapse/reset, keyboard focus, 44px controls, reduced motion, image loading, body contrast, and no horizontal page overflow. Keep existing DESIGN.md intact for this local extension; report pre-existing typography drift instead of repairing it.

## Tooling note

The installed Impeccable launcher exposes the detector but silently returns no surface-brief output; this file records the local surface contract directly. Existing DESIGN.md names Playfair Display/Plus Jakarta Sans, while actual layout.tsx uses Montserrat and JetBrains Mono; implementation inherits the actual site and does not change global documentation without approval.

## Original redesign verification (18-item baseline)

Approved local Systems Matrix redesign within the Architectural Monograph identity, consistent with PRODUCT.md's technical-evaluator audience and editorial discipline; not a new visual world or an approved global system change.

- **Tokens and shape:** TechStackSection.tsx reuses globals.css's off-white canvas (#F7F4EE), obsidian headings (#12100E), secondary/muted inks (#4A4440/#6E6660), and maroon actions (#5A171F). Open divider lists, unboxed logos, and sharp filter/expansion controls retain DESIGN.md's architectural form without cards, pills, or shadows. Warm-beige (#D8C5A5) 1px rules use 70% opacity locally and 35% at the section boundary; this does not redefine the global 35% hairline guidance. Existing tokens are unchanged.
- **Fonts:** layout.tsx supplies Montserrat and JetBrains Mono; globals.css aliases display to sans, and this section inherits them. DESIGN.md's Playfair Display/Plus Jakarta Sans discrepancy is pre-existing drift, documented rather than repaired or approved as a global font change.
- **Local behavior:** All initially shows two entries per category (six total), expanding/collapsing 6 → 18 → 6. Frontend expands 6 → 8; Backend and Tools show five each without unnecessary expansion. Changing category resets expansion; selecting the active filter preserves it. All uses three/two/one category columns on desktop/tablet/mobile, with a horizontally scrollable mobile filter rail.
- **QA evidence:** `.impeccable/review/checks.json` passes at 360/390/768/1440/1567px: counts, reset, keyboard/focus, minimum 48px controls, logo loading/fallback, and no page errors or overflow. Control colors/chevron transition for 200ms; reduced-motion transitions are effectively disabled. Supplied contrast measurements against #F7F4EE: body 8.73:1, muted 5.13:1, maroon 12.13:1.
- **Finish:** Final read-only reviewer disposition: **ship**, after all required screenshots, source, and checks; no material findings. Cross-browser and screen-reader tests were not performed. Parent-reported successful gates: `npx eslint src/app/_components/home/TechStackSection.tsx`, `npx tsc --noEmit --incremental false`, `npm run build`, and `git diff --check`; design detector returned `[]`. These gates were not rerun for this documentation-only append.

No new shipping rasters or dependencies; QA screenshots are review evidence, not production assets. DESIGN.md and PRODUCT.md remain untouched by this documentation pass; no new global YAML spec or sidecar is justified.

## Requested stack additions

The user requested Next.js (Frontend), Laravel and MySQL (Backend & Database), and Docker (Tools). Each has an original Devicon logo and a concise usage description grounded in existing project/experience data. Existing item order is preserved, with new items appended to their categories. Current totals: All 22, Frontend 9, Backend & Database 7, Tools 6. The user's edited Backend & Database label is quoted correctly and matched to the data category. Preview and expansion behavior remain unchanged; Tools now shows all six items without an expansion control. Original 18-item QA evidence above is historical, not proof of the new counts.

Addition validation passed: ESLint on both source files, full TypeScript check, scoped diff whitespace check, and detector `[]`. `.impeccable/review/stack-additions.json` records successful Chromium checks for all four descriptions and loaded logos, counts, filtering, expansion/reset, and no horizontal overflow at 1440px/390px. The corresponding stack-additions desktop/mobile captures were inspected. Focused read-only delta review disposition: **ship**, no material findings; this does not imply a fresh global or cross-browser audit. Existing global design documentation remains unchanged.
