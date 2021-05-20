import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavWrapperComponent } from './navigation/nav-wrapper.component';
import { NavToolbarComponent } from './navigation/nav-toolbar/nav-toolbar.component';
import { NavLinksComponent } from './navigation/nav-links/nav-links.component';

@NgModule({
    imports: [
        CommonModule,
        // Material
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        NavWrapperComponent
    ],
    declarations: [
        NavWrapperComponent,
        NavToolbarComponent,
        NavLinksComponent
    ]
})
export class LayoutModule { }
