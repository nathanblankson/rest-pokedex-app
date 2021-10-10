import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent {
    @Output()
    public toggleSidenavEvent: EventEmitter<any> = new EventEmitter<any>();

    public toggleSidenavEmit(): void {
        this.toggleSidenavEvent.emit();
    }
}
