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
server.js            Express static server; all routes fall through to index.html
public/index.html    the page
public/styles.css    all styling
```

## Design notes

Follows source.shop's design language:

- `#fafafa` ground, `#09090b` ink, opacity-stepped greys for hierarchy
- Geist (display/body) + Geist Mono (eyebrow labels, wordmark, colophon) via Google Fonts
- Mono labels at `11px` / `0.18em` tracking, uppercase
- Display type at `-0.045em` tracking, `1.02` line-height
- Animated `feTurbulence` grain overlay, 6% opacity, fixed at `z-index: 50`

Grain and the entry animation are both disabled under `prefers-reduced-motion`.

## Content

Founder, contact and product link live directly in `public/index.html` — there is no
CMS or data layer. Edit the `.meta` section to change them.
# Anacrusis
