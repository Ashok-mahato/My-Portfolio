# Ashok Mahato — Portfolio

A single-page editorial portfolio with a dark "systems" aesthetic and a warm pharmacy-label artifact card.

## Design language

- **Palette:** deep navy `#0b1018`, warm amber `#ffb545`, mint teal `#5ee0c0`, paper `#efe8da`.
- **Type:** Zilla Slab (display), Inter (body), JetBrains Mono (technical labels).
- **Patterns:** oversized editorial hero, availability chip, scrolling tech marquee, numbered sections, visual case-study cards, bento-style facts, and a large final contact panel.

## Files

- `index.html` — structure, metadata, content, hero photo, and CSS-drawn project previews
- `portrait.jpg` — hero photo, faded into the right half of the homepage
- `styles.css` — responsive layout, motion, reduced-motion, and print rules
- `script.js` — scroll-spy, scroll reveals, progress bar, back-to-top, current year

No build step or dependencies. Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Before publishing

Search for `TODO` in `index.html` and fill in:

1. `og:url` and `og:image` for social share previews.

LinkedIn and GitHub profiles are already linked in the contact section.

## Notes

- Content remains visible if JavaScript is disabled; JS only enhances it.
- All motion respects `prefers-reduced-motion`.
- Project previews are pure CSS/SVG — no image assets to manage.
- Print/PDF styles strip the dark background and decoration for clean printing.
