// Inside the root 'index.ts' file of our store, eg - store/index.ts
import { PokemonState } from './pokemon';
import { WishlistState } from './wishlist';

// Still allow other modules to take what they need, eg action & selectors
export * from './pokemon';
export * from './wishlist';
export * from './router';

// rolls up our states into one const
export const appState = [
    PokemonState,
    WishlistState
];
