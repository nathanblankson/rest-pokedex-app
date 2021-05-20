import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-links',
    templateUrl: './nav-links.component.html',
    styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

    public fillerNav = [
        '1',
        '2',
        '3'
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
