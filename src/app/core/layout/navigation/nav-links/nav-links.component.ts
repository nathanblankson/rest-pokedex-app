import { Component, OnInit } from '@angular/core';

import { NavLinks } from '../../../config/nav-links.config';
import { INavLink } from '../../../interfaces/nav-links.interface';

@Component({
    selector: 'app-nav-links',
    templateUrl: './nav-links.component.html',
    styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

    public navLinks: INavLink[] = NavLinks;

    constructor() { }

    ngOnInit(): void {
    }

}
