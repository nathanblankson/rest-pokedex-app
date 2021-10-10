import { MediaMatcher } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-nav-wrapper',
    templateUrl: './nav-wrapper.component.html',
    styleUrls: ['./nav-wrapper.component.scss']
})
export class NavWrapperComponent implements OnDestroy {

    @ViewChild('sidenav')
    public sidenav: MatSidenav;

    public mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    public constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _media: MediaMatcher
    ) {
        this.mobileQuery = _media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    public toggleSidenavEmitted(e): void {
        this.sidenav.toggle();
    }

    public ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
