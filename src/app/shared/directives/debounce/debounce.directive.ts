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

    private _isFirstChange: boolean = true;
    private _subscription: Subscription;

    constructor(public model: NgControl) { }

    public ngOnInit(): void {
        this._subscription =
            this.model.valueChanges.pipe(
                debounceTime(this.debounceTime),
                distinctUntilChanged()
            ).subscribe(modelValue => {
                if (this._isFirstChange) {
                    this._isFirstChange = false;
                } else {
                    this.onDebounce.emit(modelValue);
                }
            });
    }

    public ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
