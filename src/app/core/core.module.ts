import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }
}
