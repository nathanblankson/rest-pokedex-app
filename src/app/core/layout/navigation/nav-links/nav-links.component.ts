import { Component } from '@angular/core';

import { NavLinks } from '@core/config/nav-links.config';
import { INavLink } from '@core/interfaces/nav-links.interface';

@Component({
    selector: 'app-nav-links',
    templateUrl: './nav-links.component.html',
    styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent {
    public navLinks: INavLink[] = NavLinks;
}
