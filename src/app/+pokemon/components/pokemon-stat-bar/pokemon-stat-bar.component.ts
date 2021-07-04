import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

import { Pokeapi } from '@core/models/pokeapi.model';
import { map, takeUntil, takeWhile, tap, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-pokemon-stat-bar',
    templateUrl: './pokemon-stat-bar.component.html',
    styleUrls: ['./pokemon-stat-bar.component.scss']
})
export class PokemonStatBarComponent implements OnInit {

    @Input()
    public pokemonStat: Pokeapi.IPokemonStat;
    @Input()
    public shouldAnimateProgressBar: boolean = true;
    @Input()
    public timeToFillProgress: number = 1;

    public currentProgress: number = 0;

    private targetProgress: number;

    constructor() { }

    public ngOnInit(): void {
        this._initProgressBar();
    }

    private _initProgressBar() {
        this.targetProgress = this.pokemonStat.base_stat;

        if (!this.shouldAnimateProgressBar) {
            this.currentProgress = this.targetProgress;
        } else {
            // const timer$ = interval(this.timeToFillProgress);
            // const sub = timer$.subscribe((val) => {
            //     this.currentProgress = val;

            //     if (this.currentProgress >= this.targetProgress) {
            //         sub.unsubscribe();
            //     }
            // });

            interval(this.timeToFillProgress).pipe(
                takeWhile(() => this.currentProgress < this.targetProgress),
                tap(() => this.currentProgress++)
            ).subscribe();
        }
    }

}
