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
public/grooves.svg            background graphic — 82 concentric record grooves
public/favicon.svg            record mark, dark rounded square
public/apple-touch-icon.png   180×180 raster of the same mark
```

`grooves.svg` is generated art, not hand-drawn — 82 circles with jittered spacing
and occasional wider gaps standing in for the land between tracks on a record.
It carries its own left-to-right gradient mask so the type always sits on clean
ground; CSS only positions it and sets overall opacity (`.grooves`).

## Design notes

Follows source.shop's design language:

- `#fafafa` ground, `#09090b` ink, opacity-stepped greys for hierarchy
- Geist (display/body) + Geist Mono (eyebrow labels, wordmark, colophon) via Google Fonts
- Mono labels at `11px` / `0.18em` tracking, uppercase
- Display type at `-0.045em` tracking, `1.02` line-height
- Animated `feTurbulence` grain overlay, 6% opacity, fixed at `z-index: 50`
- Record grooves bleeding off the right edge, nodding to Grooves — swung down
  into the bottom-right corner below 60rem so they clear the text column

Stacking order: backdrop `z-index: 0` → content `10` → grain `50`.

Grain and the entry animation are both disabled under `prefers-reduced-motion`.

## Content

Founder, contact and product link live directly in `public/index.html` — there is no
CMS or data layer. Edit the `.meta` section to change them.
# Anacrusis
