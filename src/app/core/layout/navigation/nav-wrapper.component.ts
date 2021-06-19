import { MediaMatcher } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-nav-wrapper',
    templateUrl: './nav-wrapper.component.html',
    styleUrls: ['./nav-wrapper.component.scss']
})
export class NavWrapperComponent implements OnInit, OnDestroy {

    @ViewChild('sidenav')
    public sidenav: MatSidenav;

    public mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    public ngOnInit(): void {
    }

    public toggleSidenavEmitted(e) {
        this.sidenav.toggle();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
