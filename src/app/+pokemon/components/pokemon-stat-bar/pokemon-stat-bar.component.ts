import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

import { Pokeapi } from '@core/models/pokeapi.model';
import { takeWhile, tap } from 'rxjs/operators';

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

    private _targetProgress: number;

    public ngOnInit(): void {
        this._initProgressBar();
    }

    private _initProgressBar(): void {
        this._targetProgress = this.pokemonStat.base_stat;

        if (!this.shouldAnimateProgressBar) {
            this.currentProgress = this._targetProgress;
        } else {
            interval(this.timeToFillProgress).pipe(
                takeWhile(() => this.currentProgress < this._targetProgress),
                tap(() => this.currentProgress++)
            ).subscribe();
        }
    }
}
