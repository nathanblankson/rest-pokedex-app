import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
    selector: '[ngModel][onDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {

    @Output()
    public onDebounce = new EventEmitter<any>();

    @Input('debounce')
    public debounceTime: number = 5000;

    private isFirstChange: boolean = true;
    private subscription: Subscription;

    constructor(public model: NgControl) { }

    ngOnInit() {
        this.subscription =
            this.model.valueChanges.pipe(
                debounceTime(this.debounceTime),
                distinctUntilChanged()
            ).subscribe(modelValue => {
                if (this.isFirstChange) {
                    this.isFirstChange = false;
                } else {
                    this.onDebounce.emit(modelValue);
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
