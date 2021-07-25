import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageMessageComponent } from './full-page-message.component';

describe('FullPageMessageComponent', () => {

    let component: FullPageMessageComponent;
    let fixture: ComponentFixture<FullPageMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FullPageMessageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FullPageMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
