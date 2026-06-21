# Shaundre Portfolio — Design Brainstorm

## Three Stylistic Approaches

### 1. Terminal Noir
A hacker-aesthetic inspired by terminal emulators and code editors. Monospaced fonts, green-on-dark phosphor glow, scanline textures.
**Probability:** 0.04

### 2. Graphite Blueprint
Engineering precision meets modern minimalism. Slate-charcoal backgrounds, cool-white typography, electric cyan as the single accent. Structured, asymmetric grid layouts inspired by technical schematics.
**Probability:** 0.08

### 3. Obsidian Signal
Dark but warm — deep charcoal backgrounds (not pure black), off-white body text, and a single electric amber/gold accent that signals "signal found." Sparse, purposeful layout with generous whitespace and sharp typographic hierarchy.
**Probability:** 0.06

---

## Chosen Approach: **Graphite Blueprint**

Selected for its balance of tech-savvy personality and professional legibility — ideal for both recruiters and freelance clients.

### Design Movement
Bauhaus-influenced technical minimalism — form follows function, but every element is precisely placed.

### Core Principles
1. **Precision over decoration** — no ornamental elements; every visual serves a purpose
2. **Asymmetric tension** — layouts that feel intentional, not centered-by-default
3. **Signal through contrast** — one electric accent color does all the emotional heavy lifting
4. **Generous negative space** — breathing room is a design choice, not emptiness

### Color Philosophy
- **Background:** `#1a1d23` — deep slate, not pure black; warm enough to feel human
- **Surface:** `#22262e` — card/section backgrounds, slightly lifted
- **Border/Subtle:** `#2e3340` — structural lines, dividers
- **Body text:** `#c8cdd8` — off-white, easy on the eyes for long reads
- **Heading text:** `#eef0f5` — near-white, sharp hierarchy
- **Accent (signature):** `#00d4ff` — electric cyan; the "signal" color used sparingly for links, highlights, and active states
- **Accent warm:** `#ffd166` — amber used only for the most critical CTA

Emotional intent: "This developer thinks clearly, builds precisely, and doesn't waste your time."

### Layout Paradigm
- **Hero:** Full-width, left-aligned text block with a large typographic name treatment; no centered hero.
- **Projects:** Horizontal card rail with subtle depth; cards use a left-border accent stripe.
- **Skills:** Tag-cloud style with size variation, not a boring grid of bars.
- **About/Resume:** Two-column split — narrative left, key facts right.
- **Contact:** Minimal form + direct links, no filler copy.

### Signature Elements
1. **Cyan left-border accent** on cards and section headings — a recurring motif
2. **Monospaced inline code snippets** for tech terms (e.g., `Python`, `REST API`)
3. **Subtle dot-grid background texture** on the hero section

### Interaction Philosophy
Interactions are instant and purposeful. Hover states reveal information rather than just changing color. No gratuitous animations — motion is earned.

### Animation
- Section entrances: `opacity: 0 → 1` + `translateY(20px → 0)` over 400ms `cubic-bezier(0.23, 1, 0.32, 1)`, staggered 60ms per item
- Card hover: `translateY(-4px)` + subtle box-shadow deepening, 180ms ease-out
- Nav links: underline slides in from left, 200ms
- CTA button: `scale(0.97)` on active, 160ms ease-out
- Respect `prefers-reduced-motion`

### Typography System
- **Display / Name:** `Space Grotesk` — geometric, modern, slightly quirky; weight 700
- **Headings:** `Space Grotesk` — weight 600
- **Body:** `Inter` — clean, readable; weight 400/500
- **Code/Tech tags:** `JetBrains Mono` — monospaced, signals technical credibility
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64px

### Brand Essence
**Shaundre** — a problem-solver who ships across the full stack, for developers who want to hire someone who figures it out.
Personality: **Precise. Curious. Resourceful.**

### Brand Voice
Headlines are direct and confident — no fluff.
- "Every problem has a solution." (hero tagline — already perfect)
- "I build what's needed. I learn what's required."
CTAs: "View Project →", "Download Resume", "Let's Talk"
Ban: "Welcome to my portfolio", "I am passionate about...", "Get in touch today"

### Wordmark & Logo
A bold `<S/>` ligature — the `<` and `>` are code brackets, the `S` is the initial. Rendered in cyan on dark background. Used as favicon and header mark.

### Signature Brand Color
`#00d4ff` — Electric Cyan

## Style Decisions
- Dark theme default (`defaultTheme="dark"`)
- Background is `#1a1d23`, not pure black
- Accent is electric cyan `#00d4ff`, used sparingly
- Space Grotesk for headings, JetBrains Mono for code tags
- Left-aligned hero, asymmetric layouts throughout
