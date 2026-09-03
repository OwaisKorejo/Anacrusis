# Anacrusis

The Anacrusis site. One page, Node.js + Express.

## Run

```bash
npm install
npm start           # http://localhost:3000
npm run dev         # same, with --watch reload
```

Port 3000 was in use locally, so override it if needed:

```bash
PORT=4321 npm start
```

## Layout

```
server.js                     Express static server; all routes fall through to index.html
public/index.html             the page
public/styles.css             all styling
public/desktop.png            backdrop, landscape (>60rem)
public/phone.png              backdrop, portrait (<=60rem)
public/favicon.svg            record mark, dark rounded square
public/apple-touch-icon.png   180×180 raster of the same mark
```

## Design notes

Follows source.shop's design language:

- White type over full-bleed artwork on a `#061027` ground
- Muted steps sit high (58-78% white) because anything lower stops reading
  against the sky; flat-paper values would be far darker
- Geist (display/body) + Geist Mono (eyebrow labels, wordmark, colophon) via Google Fonts
- Mono labels at `11px` / `0.18em` tracking, uppercase
- Display type at `-0.045em` tracking, `1.02` line-height
- Animated `feTurbulence` grain overlay, 6% opacity, fixed at `z-index: 50`

The `.stage` scrim is what keeps the type legible, and it differs per
orientation. Landscape art puts the figure right of centre, so the scrim is
weighted to the left where the type sits. Portrait art puts the figure
mid-frame with type above and below, so the scrim weights top and bottom
instead. Swapping either image means re-checking its scrim.

Stacking order: stage `z-index: 0` -> content `10` -> grain `50`.
Grain and the entry animation are both disabled under `prefers-reduced-motion`.

## Content

Founder, contact and product link live directly in `public/index.html` — there is no
CMS or data layer. Edit the `.meta` section to change them.
# Anacrusis
