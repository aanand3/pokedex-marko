# Thanks for checking out my Pokedex

### Todos: 
- Debug snap-scrolling: https://css-tricks.com/practical-css-scroll-snapping/
- Add search (I tried, but Marko was not having a good time storing state in a component which also fetches)
- Remove the scrollbars from the cards but keep them the same size
  - or make them flow together if they're different sizes
- Dialog/popup with all the info about a pokemon on click

### References: 
- https://pokeapi.co/
- https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
- https://dev.to/ryansolid/back-to-basics-building-a-hackernews-clone-with-marko-mj
- https://markojs.com/docs
- https://dev.to/austingardner/up-and-running-with-marko-and-vite-3m32

# Installation

```
npx @marko/create marko-app --template basic
cd marko-app
npm install
npm run dev
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `npm run dev` to start the development server
- Run `npm run build` to build a production-ready node.js server
- Run `npm run preview` to run the production server

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files.  Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).

