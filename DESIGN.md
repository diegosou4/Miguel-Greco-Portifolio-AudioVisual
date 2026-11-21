---
name: Miguel Greco
description: A dark cinematic editorial system for a filmmaker and editor.
colors:
  ink: "#f2f0ed"
  paper: "#101010"
  night: "#0a0a0a"
  accent: "#d2b9f5"
  muted: "#b5b2b8"
  dark-muted: "#b5b2b8"
  rule: "#343235"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(58px, 7.1vw, 96px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(36px, 3.4vw, 52px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 700
    lineHeight: 1.18
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
  media: "16px"
  pathway: "14px"
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
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 25px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
  filter:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 17px"
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
  field:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 0"
  navigation:
    backgroundColor: "{colors.night}"
    textColor: "{colors.ink}"
  film-card:
    rounded: "{rounded.media}"
  whatsapp-shortcut:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  play-control:
    rounded: "{rounded.circle}"
    width: "64px"
    height: "64px"
---

# Design System: Miguel Greco

## Overview

**Creative North Star: "Cinematic Editorial"**

Large real films, expressive typography and quiet navigation establish a professional portfolio with the rhythm of a director's treatment. Images carry the atmosphere; the interface makes the work, contribution and next action clear.

The user-confirmed rebrand uses a neutral dark screening-room foundation inspired by lolawilde.com, with light lavender heading emphasis, a scroll-revealed biography trail and restrained interface details. Manrope supplies both confident titles and clear reading text. Depth comes from real media and the circular perspective carousel, with an equally complete reduced-motion presentation. The home-page sequence is recorded in `.impeccable/surfaces/home.md`.

**Key Characteristics:**
- Real moving images as the visual lead.
- Large, tightly tracked editorial headings.
- Neutral dark surfaces with off-white text, light lavender heading emphasis and restrained accents.
- Rounded film frames arranged in circular perspective.
- Visible controls, keyboard focus and reduced-motion support.

## Colors

The dark neutral foundation lets source films retain their own color. Frontmatter records the CSS custom-property palette; historical names `ink` and `paper` now mean foreground and background respectively.

### Primary
- **Light Lavender** (`accent`): selected heading words, including “histórias”, portfolio introduction emphasis, pathway headings, About and contact emphasis; also wordmark punctuation, focus outlines, mobile WhatsApp details, selection and small interactions. Hover fills use a separate lavender (`#d0c1e5`). It is not a large section fill.

### Neutral
- **Off-white Foreground** (`ink`): primary text and filled contact actions.
- **Screening Room** (`paper`): main page and About background.
- **Near Black** (`night`): header, footer and playback surfaces.
- **Muted Gray** (`muted`, `dark-muted`): supporting text on dark surfaces.
- **Dark Rule** (`rule`): subtle structure and dividers.

Pathways use a local dark surface (`#151515`); contact uses a local dark surface (`#1b191e`). The personal Polaroid uses an off-white paper frame and dark caption. These local surfaces do not expand the accent palette.

**The Film First Rule.** Let the source film supply its own color; use interface color to make structure and actions legible.

**The Accent Restraint Rule.** Use light lavender for selected heading words, small details and interaction states; preserve neutral dark backgrounds across large sections.

## Typography

**Display Font:** Manrope, with Arial and sans-serif fallbacks.
**Body Font:** Manrope, with the same fallbacks.

The implementation self-hosts static regular and bold TTF assets. The bold file is registered for weights 600–800; this does not supply a variable font axis. Font synthesis is disabled. Hierarchy comes from scale, weight, tight tracking and generous placement. Upright regular-weight emphasis and light lavender highlight selected heading words, including “histórias” in the opening headline.

### Hierarchy
- **Display:** opening headline follows the frontmatter role; compact screens use `clamp(58px, 8.5vw, 86px)`, and mobile uses `clamp(45px, 10.6vw, 68px)` with line height 1.09.
- **Headline:** portfolio introductions use the frontmatter role, reducing to 36px on mobile. Biography, pathways and contact adapt their scale to their content.
- **Title:** on-image carousel titles use the frontmatter role and 23px on mobile, centered over a dark gradient.
- **Body:** regular reading uses the frontmatter role; mobile biography, pathways and introduction remain 16px. The biography lead is 22px desktop and 20px on compact screens; its reading measure is capped at 65ch.
- **Label:** navigation, filters, film metadata and primary compact actions use 14px. Secondary utility text can be smaller without establishing a new primary-label size.

**The One Family Rule.** Create hierarchy through scale, weight, spacing and placement within Manrope.

## Layout

Fluid outer gutters, broad sections and generous media keep the portfolio cinematic. The default section rhythm is 110px, compressing below 1000px and 700px; portfolio and contact use local tighter spacing. Above 1600px, ordinary content preserves a central 1510px region while the carousel extends toward the viewport edges.

The opening film remains large beneath the quiet header, with its headline vertically centered and no decorative top line. A perspective stage presents the work; controls are centered beneath its active film and metadata. Pathways and biography use two columns on desktop and one column on mobile. Forms collapse paired fields into a single column. Existing twelve-column project-grid styles are legacy selectors, not the current gallery composition.

Breakpoints are 1000px for compression, 700px for mobile structure and 1600px for the wide content bound. Mobile retains the circular presentation with a tighter orbit radius so neighboring covers remain visible, full project access, visible touch controls and safe-area clearance. Header and hero account for device insets and short landscape viewports.

## Elevation & Depth

Most sections remain flat, separated by tone, space and thin rules. Film gradients preserve on-image text contrast. The signature gallery uses actual CSS 3D perspective: cards follow a circular arrangement with changing horizontal position, depth, Y rotation and opacity. It is not a flat horizontal strip. Temporary mobile navigation and floating contact use local shadows; the personal Polaroid has a soft shadow (`0 14px 35px #0005`) and a slight rotation.

## Shapes

Portrait carousel media has gently rounded corners (16px); pathway images use 14px. Contact actions and filters are pills; arrows, play controls and mobile navigation controls are circles. Fields and the personal Polaroid remain square. Borders are thin and functional, separating content and identifying controls.

## Components

### Buttons

The primary contact pill is off-white with near-black text, 14px bold type and a minimum height of 46px. Lavender appears on hover. Outline actions use a thin current-color border, pill corners and a 48px minimum height; hover fills off-white with dark text. Underlined links keep a visible text action and a minimum 44px target. Disabled controls retain native semantics and reduced opacity.

Interactive links and controls use a visible two-pixel lavender focus outline offset by 6px. Form fields use the off-white foreground for their focus outline. The focusable carousel stage supports keyboard navigation and keeps its focus outline inset so clipping cannot hide it.

### Filters

Wrapping category pills remain transparent with off-white text, use a dark hover fill (`#29262d`), and reverse to off-white with near-black text when selected. They expose `aria-pressed` and preserve 44px minimum touch targets. Changing category resets the active carousel item.

### Circular Film Carousel

Rounded portrait cards curve away from a central film using perspective, depth and rotation. The center card is the film detail link, with title and “Ver filme” action on the image. Visible side cards are selection buttons. More distant cards become dimmer; hidden cards are inert. The selected project's participation and descriptive line remain below the media; complete credits remain in film details. Where available, all visible cards—including the center and its side neighbors—play short silent real-film previews while in view. Hidden and offscreen cards pause. Preview playback pauses offscreen or when the tab is hidden, uses no preload, and retains the poster if loading or playback fails. Reduced-motion and data-saving preferences start previews paused; a visible play/pause control permits an explicit visitor override. The folder-based project keeps an image fallback.

Previous/next controls loop through the selected list and sit centrally beneath the media with a politely announced position. They disable for a single film. Horizontal dragging continuously rotates the ring through fractional positions, then settles on release; horizontal trackpad gestures also turn it; vertical page scrolling remains free. Arrow keys work when the stage itself has focus. Selecting, filtering and expanding the archive preserve the real project records.

Card transforms transition over .85s with `cubic-bezier(.16,1,.3,1)`; opacity transitions over .65s. Reduced motion removes transitions and retains every manual interaction.

### Inputs / Fields

Transparent square fields sit on the dark contact surface with light bottom rules, off-white text, muted placeholders and 16px input text. Keep visible labels, native required validation and a vertically resizable textarea. The optional form prepares a WhatsApp message for the visitor to review and send; it does not imply a submitted backend request.

### Navigation and Contact

A near-black header holds the wordmark, quiet role text, short links and an off-white contact pill. Below 700px the role text yields to a circular lavender WhatsApp link and a 44px menu toggle. The toggle exposes expanded state; Escape closes the menu and returns focus. Preserve the keyboard-visible skip link.

WhatsApp uses the inline brand SVG with accessible names on icon-only links. The floating shortcut is an off-white pill with near-black text; mobile becomes a 56px icon-only circle. It respects safe-area clearance and hides while contact, footer or a film player is visible. It appears after the hero has at most 15% intersection with the viewport. Main contact and prepared-message actions retain visible labels.

### Personal Film and Biography Trail

The personal 9:16 video sits in an off-white Polaroid with a dark caption, “Além da ilha de edição.” Its original airplane photograph stays behind a short silent preview until decoded playback is ready. The preview follows the same visibility, reduced-motion and data-saving policy as the gallery, with a separate small pause/play control. The centered main play button starts the original full video with audio and native controls, removing the preview layer. The original stays paused until explicit activation and preloads metadata only. The frame starts rotated -2deg, then straightens once when 35% visible, over .9s with the gallery easing. Focus within also straightens it; reduced motion keeps it straight without a transition.

A dotted gray route and fourteen outline icons connect travel and creative practice across the About background. A light-lavender layer progressively highlights the route and icons through an SVG mask as section scroll progress moves from zero to one. This follows scrolling, with no autonomous animation; reduced motion shows the completed lavender route. Measured positioning and masking protect the heading, video and biography; mobile reserves bottom space for its loop. It is decorative, hidden from assistive technology and unable to intercept pointer interaction. This remains a home-surface detail.

### Film Controls

The large opening film remains muted with visible play/pause, respects user pause and pauses when hidden or outside the viewport. Reduced motion disables automatic background playback, scroll framing and transitions, while manual playback remains available. Film details start playback after explicit activation and retain the original-file fallback.

## Do's and Don'ts

### Do:
- **Do** lead with real films and preserve project titles, participation and complete source credits.
- **Do** use Manrope hierarchy, neutral dark surfaces, light lavender heading emphasis and restrained interface details.
- **Do** preserve visible controls, keyboard focus, mobile touch targets and reduced-motion behavior.
- **Do** keep the large opening video and the circular perspective gallery.

### Don't:
- **Don't** turn the contact area or other large sections into purple fills.
- **Don't** flatten the selected circular carousel into a plain horizontal strip.
- **Don't** replace the opening film with a decorative placeholder or enable autoplay sound.
- **Don't** assume a variable font axis exists in the supplied static assets.
