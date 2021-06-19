import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent implements OnInit {

    @Output()
    public toggleSidenavEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    public ngOnInit(): void { }

    public toggleSidenavEmit() {
        this.toggleSidenavEvent.emit();
    }

}
