# Home — dark cinematic editorial portfolio

React/Vite portfolio, built directly in code. This brief records the final user-authorized rebrand inspired by lolawilde.com: neutral dark surfaces, light lavender heading emphasis, restrained interface details and a circular carousel in perspective. The prior version is preserved by the Git tag `pre-rebrand-purple`; the rebrand lives on `rebrand/purple`.

## First viewport

Keep the large real opening movie beneath the quiet near-black header. The vertically centered “Um olhar. Muitas histórias.” overlays the film with readable contrast, a link to its detail player, an action to explore work and visible play/pause. The film stays muted; the former decorative top line is removed. Scroll-driven framing is subtle; reduced motion leaves the frame fixed and offers manual playback over the poster.

## Sequence and gallery

Opening film → filtered circular film carousel → brand and wedding pathways → biography and personal film → direct WhatsApp contact and optional briefing form.

The gallery opens with all thirteen original projects immediately; category filters can return a single film. No expansion step hides the rest of the catalog. All project records, source covers, descriptions, participation and complete detail credits remain grounded in the original portfolio.

The gallery is an actual CSS 3D circular arrangement. The active portrait card faces forward, with its title and “Ver filme” link on the image. Neighboring cards recede and rotate in perspective; clicking a side card selects it. Hidden cards are inert. Selected participation and description appear beneath the stage. Centered previous/next buttons and a live position count sit below; navigation loops, with arrows disabled for one film. Horizontal dragging continuously rotates the ring through fractional positions before settling on release. Horizontal trackpad gestures and arrow keys on the focusable stage also navigate; its inset focus outline remains visible. Vertical scrolling stays free. Reduced motion removes transitions while preserving controls. Mobile uses a tighter orbit radius to keep neighboring covers visible and keeps the same circular composition rather than switching to a plain horizontal strip.

## Silent film previews

Twelve real project excerpts in `public/assets/previews/` are seven seconds each, starting two seconds into the originals, encoded as portrait 480 × 640 H.264 with no audio. All visible cards, including side neighbors, play their previews while in view; hidden and offscreen cards pause. The source covers remain behind the video layers; “Narrativa sequencial” is a folder project with an image fallback rather than a specific film preview. All thirteen original projects appear on arrival; the twelve individual films use the same preview behavior, while the folder project opens its source collection.

Previews use `preload="none"`, pause offscreen or when the tab is hidden, and leave the source cover visible until decoded playback is ready. Errors retain the poster. Reduced-motion and data-saving preferences start previews paused; the visible preview toggle lets the visitor explicitly enable or pause them. These short silent excerpts do not replace the full film detail players.

## Palette and pathways

The foundation is neutral dark: main background `#101010`, header/footer `#0a0a0a`, foreground `#f2f0ed` and supporting text `#b5b2b8`. Light lavender `#d2b9f5` emphasizes “histórias” in the hero and selected text in portfolio, pathway, About and contact headings. It also serves punctuation, focus and small interaction details. Contact uses a local dark surface, not a large purple region. Brand and wedding pathways keep their real frames and direct visitors toward relevant work.

## Biography and personal film

A user-supplied local 25-second portrait video (576 × 1024) accompanies Miguel’s name, captioned “Além da ilha de edição.” An off-white Polaroid frames it beside biography text on desktop and before the text on mobile. A local seven-second 480 × 854 silent preview plays while visible, using the same pause, visibility and preference policy as gallery previews. The airplane poster stays behind it until decoded playback is ready, and a small pause/play button controls the preview. The centered play button starts the original full video with audio and native controls and removes the preview layer. The original remains paused until explicit activation and preloads metadata only. The frame starts at -2deg and straightens once when 35% visible; reduced motion keeps it straight.

A gray dotted route spans the About background, from “escuta” toward the Polaroid, with fourteen outline travel and filmmaking icons. A light-lavender overlay progressively reveals the route and icons through an SVG mask according to section scroll progress from zero to one. It has no autonomous animation; reduced motion shows the completed highlight. Measured geometry, masking and collision avoidance protect text and media. On mobile the route uses side space and a bottom loop. The decoration is hidden from assistive technology and does not intercept pointer interaction.

## Content and contact

Project detail pages retain real roles, playable source films and original-file fallback links. The biography describes Miguel’s audiovisual practice and experience at Retriz. The header and mobile menu expose WhatsApp directly. The floating shortcut appears when the hero has at most 15% intersection and hides while contact, footer or a film player is visible. Mobile uses an accessible icon-only circle with safe-area clearance. The optional briefing prepares a WhatsApp message for the visitor to review and send.

Source covers may contain baked-in captions; cleaner verified source frames can replace them. Google Drive hosts source films. This delivery has no publishing CMS backend. These are integration facts, not reusable visual-system rules.
