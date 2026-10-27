# CraveCorner

CraveCorner is a responsive campus food-ordering experience built around the idea “Good food. Better breaks.” It uses an editorial street-food visual language, local placeholder artwork, and a client-only simulated checkout.

## Features

- Menu loaded asynchronously from `public/data/menu.json`
- Search by name, description, or category and category chips
- Food details with ingredients, ratings, preparation times, and availability
- Shared cart with quantity controls, totals, and LocalStorage persistence
- Favourites page with LocalStorage persistence
- Responsive navigation and layouts for mobile, tablet, and desktop
- Accessible labels, semantic controls, visible focus states, and reduced visual complexity
- Simulated checkout with validation and generated order number

## Run locally

```bash
npm install
npm run dev
```

Production commands: `npm run build`, `npm run preview`, `npm run test:run`, and `npm run lint`.

## Structure

`src/components` contains reusable layout, menu, cart, and state components. `src/pages` contains route-level views. `src/context/CartContext.jsx` owns cart and favourite state and persists only cart entries and favourite IDs. `src/services/menuService.js` is the single menu loading boundary.

Add menu entries by editing `public/data/menu.json`. Each entry needs the fields already demonstrated in the file. Checkout is intentionally simulated: no payment information or backend request is collected.
