# Thanks for checking out my Pokedex

With this project, I was aiming for a slightly retro, tri-color feel that evokes the old days of Pokemon on the GameBoy Color. I wanted to keep the UI as simple as possible while mimicing the behaviors which were most salient in the old-school Pokemon games, like the spinning Pokeball and the sense of 'choosing' a team of Pokemon. 

There's a lot of room for improvement, but it was fun to put this together. I definitely had a hard than expected time implementing search, since I couldn't figure out how to store/update state -- gave up on that because of the time limit. 

Thanks for the fun, unique challenge! Would love to hear any feedback. 

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

