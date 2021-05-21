import { INavLink } from '../interfaces/nav-links.interface';

export const NavLinks: INavLink[] = [
    {
        name: 'Pokémon',
        urlLink: 'pokemon',
        iconClass: 'fas fa-list'
    },
    {
        name: 'Wishlist',
        urlLink: 'wishlist',
        iconClass: 'fas fa-heart'
    },
    {
        name: 'Caught',
        urlLink: 'caught',
        iconClass: 'fas fa-star'
    }
];

