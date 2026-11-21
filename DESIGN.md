---
name: Miguel Greco
description: A cinematic editorial system for a filmmaker and editor.
colors:
  ink: "#171917"
  paper: "#f3f2ee"
  accent: "#d5f875"
  muted: "#62645e"
  rule: "#d2d2cb"
  dark-muted: "#bbbbb3"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(58px, 7.1vw, 96px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(40px, 4.5vw, 64px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
rounded:
  square: "0"
  pill: "100px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 3.1vw, 48px)"
  small: "20px"
  medium: "24px"
  large: "32px"
  section-mobile: "65px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 25px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  filter:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 17px"
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 0"
  navigation:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  whatsapp-shortcut:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  whatsapp-shortcut-mobile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
    rounded: "{rounded.circle}"
    width: "56px"
    height: "56px"
  play-control:
    rounded: "{rounded.circle}"
    width: "64px"
    height: "64px"
---

# Design System: Miguel Greco

## Overview

**Creative North Star: "Cinematic Editorial"**

Large real films, expressive typography and quiet navigation establish a professional portfolio with the rhythm of a director's treatment. Images carry the atmosphere; the interface makes the work, contribution and next action clear.

The confirmed world combines charcoal, warm paper and chartreuse with asymmetric, unboxed media. Manrope supplies both confident titles and restrained reading text. Motion follows the film and visitor interaction, with an equally complete reduced-motion presentation. The home-page sequence is recorded in `.impeccable/surfaces/home.md`.

**Key Characteristics:**
- Real moving images as the visual lead.
- Large, tightly tracked editorial headings.
- Asymmetric media with captions outside the frame.
- Flat surfaces, thin rules and selective chartreuse.
- Visible controls, keyboard focus and reduced-motion support.

## Colors

A warm neutral foundation gives films room to vary; chartreuse marks emphasis and invitation. Frontmatter is the normative palette; CSS custom properties in `src/styles.css` implement these names.

### Primary
- **Chartreuse** (`accent`): contact actions, wordmark punctuation, selected headline emphasis and interactive play states. A full accent contact surface is part of the implemented vocabulary.

### Neutral
- **Charcoal** (`ink`): dark surfaces and primary text on paper or chartreuse.
- **Warm Paper** (`paper`): reading surfaces and primary text on charcoal.
- **Quiet Ink** (`muted`): secondary reading text on paper.
- **Soft Paper** (`dark-muted`): secondary text on charcoal.
- **Paper Rule** (`rule`): divisions and field-adjacent structure on paper.

**The Film First Rule.** Let the source film supply its own color; use interface color to make structure and actions legible.

## Typography

**Display Font:** Manrope, with Arial and sans-serif fallbacks.
**Body Font:** Manrope, with the same fallbacks.

**Character:** A single sans-serif voice moves between cinematic scale and clear editorial reading. Upright regular-weight emphasis within bold headings creates contrast without adding another family or italic style.

The implementation self-hosts static TTF assets: `Manrope-Regular.ttf` at weight 400 and `Manrope-Bold.ttf`, registered for weights 600–800. The latter registration is a CSS range over a static file, not a variable font. Font synthesis is disabled. Existing heading selectors request 600; no variable weight axis is available.

### Hierarchy
- **Display:** the frontmatter role describes the desktop opening headline. Below 1000px its size is `clamp(58px, 8.5vw, 86px)`; below 700px it becomes `clamp(45px, 10.6vw, 68px)` with line height 1.09.
- **Headline:** section introductions use the frontmatter role, with a mobile size of 42px. Other large headings adapt to their content: pathway titles, professional story and contact invitation are distinct applications rather than one forced scale.
- **Title:** project names use the frontmatter role, reducing to 20px on mobile.
- **Body:** reading text uses the frontmatter role; mobile long-form paragraphs use 15px. Introductory biography text is 22px desktop and 20px on smaller screens, with line height 1.6. The biography measure is capped at 65ch.
- **Label:** navigation, filters and main compact actions use 14px. Small secondary credits, counts and utility text currently vary below this size; those exceptions do not define a primary-label scale.

**The One Family Rule.** Create hierarchy through scale, weight, spacing and placement within Manrope.

## Layout

The common outer gutter is fluid, as specified in frontmatter. Above 1600px, horizontal padding additionally preserves a central 1510px content region. Default section padding is 110px vertically, reducing to 85px below 1000px and 65px below 700px.

Media compositions use a twelve-column desktop grid with unequal spans, open columns and staggered starts. The project grid has 32px horizontal and 65px vertical gaps, then 25px and 55px below 1000px. Below 700px projects become a sequential reading flow; alternating 15% side offsets retain asymmetry. Reading sections use two columns with generous gaps, collapsing to one on mobile. Forms also collapse their paired fields into one column.

Breakpoints are based on the actual layout: 1000px for compression, 700px for mobile structure and 1600px for the wide-screen content bound. Header height changes from 102px to 90px to 82px, and the opening media accounts for that height. Do not hide primary work or contact paths at smaller sizes. The viewport enables `viewport-fit=cover`; mobile header padding, hero bottom padding and floating contact clearance account for safe-area insets. In landscape viewports at most 500px tall, the header becomes 76px, the film retains a 500px minimum height and header/hero horizontal padding uses the greater of 24px or the corresponding safe-area inset.

## Elevation & Depth

The system is flat at rest. Tonal section changes, thin rules, image crops and spacious separation establish hierarchy. Media overlays protect text legibility without turning projects into raised cards. A mobile navigation shadow (`0 16px 26px #0003`) separates its temporary panel from the film; it is not a general card shadow. The floating contact shortcut uses `0 8px 24px #0003` to separate an actionable overlay from films and reading surfaces. Image-category captions use a local text shadow for legibility.

## Shapes

Media and fields are square. Small contact actions, filters and outline actions use pills; play and mobile-menu controls are circular. Borders are thin and functional: dividers, outline actions and control boundaries. Project images clip within their media frame; captions remain outside it.

## Components

### Buttons

Compact, direct actions with visible labels. The primary contact pill uses chartreuse over charcoal text, 14px bold type and a minimum height of 46px. Its hover surface lightens to `#e2ffa0`. The outlined action uses a one-pixel current-color border, 14px type and a minimum height of 48px; hover fills charcoal with paper text. Underlined text links use 15px type, a 44px minimum height and an underline offset of 6px, thickening on hover.

All interactive elements expose a two-pixel focus outline in `#749b2b`, offset by 6px. Fields on chartreuse use charcoal for the focus outline. Disabled buttons reduce opacity to 0.5 and show the disabled cursor. Preserve native disabled semantics.

### Filters

Wrapping pill buttons identify project categories. Unselected filters are transparent with charcoal text; hover adds `#e3e4dc`; the selected state is charcoal with paper text. Minimum height remains 44px and selection is reflected with `aria-pressed`. Mobile padding tightens without removing the visible label.

### Cards / Containers

Projects are unboxed media links with adjacent title, role and descriptive line. There is no enclosing card fill, border or shadow. Standard media is landscape; narrower placements can be taller, while portrait work can use containment. Hover and keyboard focus scale the image to 1.035 over 0.7 seconds with `cubic-bezier(.16,1,.3,1)`. The title and participation remain readable outside the frame. The play affordance and category sit over a gradient-backed image edge.

### Inputs / Fields

Transparent, square fields are drawn with a bottom border on the chartreuse contact surface. Text inputs, selects and textareas use 16px text, a minimum height of 48px and visible labels. Placeholders are supporting hints, not labels. The select keeps its native interaction with a custom chevron. The textarea resizes vertically. Required validation uses native browser behavior; no custom error or success design is established.

### Navigation

A charcoal header holds the Manrope wordmark, quiet role text, short links and contact pill. Desktop links use 14px type and at least 44px height; hover introduces chartreuse. Below 700px a 44px circular toggle reveals a full-width charcoal panel under the header, with 25px links and 62px row heights. The toggle exposes expanded state; Escape closes the menu and returns focus. On mobile, the role text yields space to a 44px circular WhatsApp link with a 23px brand glyph; the glyph also appears beside the mobile-menu WhatsApp label. The skip link becomes visible on keyboard focus.

### WhatsApp Contact

Use the inline Simple Icons WhatsApp brand SVG (CC0) in the header shortcut, mobile menu, main contact action and prepared-message action. The icon inherits the current interface color; it does not introduce another brand-color token. Keep an accessible action name on icon-only links. Main and prepared-message actions retain their visible labels.

The floating shortcut is a charcoal pill with chartreuse icon and label, a 56px minimum height and a 25px glyph. At 700px and below it becomes a 56px circular icon-only link, retaining its accessible name. Its bottom clearance adds the safe-area inset to 18px; right clearance uses the greater of 18px or the inset. Hover reverses to chartreuse with charcoal. It uses the shared visible focus outline.

The shortcut appears when the opening film has at most 15% intersection with the viewport (or no opening film exists), and hides whenever the contact section, footer or film player intersects the viewport. This preserves access while avoiding competing contact actions and playback controls.

### Personal Film

A portrait video beneath Miguel’s name uses a small Polaroid treatment: a white paper frame (`#fff`), square corners, padding of 14px with a 20px bottom edge, a local shadow (`0 12px 30px #17191724`) and a -2deg rotation. This is a deliberate personal-media exception to the otherwise flat, unboxed film system. Its width is capped at 308px, with margin `36px 0 8px`; below 700px it is centered with width `min(calc(100% - 12px), 288px)` and margin `30px auto 8px`. Keyboard focus within straightens the figure.

The 9:16 native video uses cover fitting over charcoal. The travel photograph supplies the initial poster, avoiding a blank opening frame; the vertical source shares the frame’s aspect ratio. A centered 64px paper-colored play button with charcoal icon and a local shadow (`0 4px 16px #17191730`) starts playback; hover introduces chartreuse. After playback starts, native controls replace the overlay. The player uses inline playback and metadata-only preload. It does not autoplay, so the site opens silently; explicit playback retains audio and native volume control. The centered caption “Além da ilha de edição.” uses muted Manrope at 13px, line height 1.5 and an 18px top gap. This secondary caption does not establish a primary-label size.

### Film Controls

Outlined circular play affordances pair an icon with a visible text action. Hover introduces chartreuse and charcoal. Opening background video stays muted, exposes play/pause, pauses when hidden or outside the viewport, and respects user pause. Reduced motion disables automatic background playback, scroll framing and transitions; manual playback remains available. Film detail playback starts from an explicitly activated poster with clear original-file fallback.

## Do's and Don'ts

### Do:
- **Do** lead with real films and keep titles and participation readable beside the media.
- **Do** use Manrope hierarchy, warm neutrals and chartreuse consistently.
- **Do** preserve visible labels, focus states, mobile touch targets and reduced-motion behavior.
- **Do** use thin rules and space to separate content.

### Don't:
- **Don't** add raised card shells around the film grid.
- **Don't** replace the opening film with a decorative placeholder or enable autoplay sound.
- **Don't** treat small secondary credits as the default size for primary labels.
- **Don't** assume a variable font axis exists in the supplied static assets.
