export type NavLinkName = 'Pokémon' | 'Wishlist' | 'Caught';

export interface INavLink {
    name: NavLinkName;
    urlLink: string;
    iconClass: string;
}
