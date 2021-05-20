import { INavLink } from '../interfaces/nav-links.interface';

export const NavLinks: INavLink[] = [
    {
        name: 'Pokémon',
        urlLink: 'dashboard',
        iconClass: 'fas fa-list'
    },
    {
        name: 'Wishlist',
        urlLink: 'sourcebots',
        iconClass: 'fas fa-heart'
    },
    {
        name: 'Caught',
        urlLink: 'intel',
        iconClass: 'fas fa-star'
    }
];

