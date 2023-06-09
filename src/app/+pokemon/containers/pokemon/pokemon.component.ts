import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';

import { Pokemon } from '@core/models/pokemon.model';
import { GetPokemonDetailsList, PokemonState } from '@store/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

    @ViewChild('paginator')
    public paginator: MatPaginator;

    public filteredPokemon$: Observable<Pokemon.IPokemon[]>;
    public filteredPokemonCount$: Observable<number>;
    public searchQuery: string = '';
    public searchQueryChange: Subject<string> = new Subject<string>();
    public pageEvent: PageEvent;
    public pageSize: number = 10;
    public currentPageIndex: number = 0;

    public constructor(private _store: Store) {
        this._fetchPokemon();
    }

    public onSearchFilterChange(): void {
        if (this.currentPageIndex !== 0) {
            this.paginator.firstPage();
        } else {
            this._fetchPokemon();
        }
    }

    public onPaginateChange(event: PageEvent): void {
        this.currentPageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this._fetchPokemon();
    }

    private _fetchPokemon(): void {
        const start = this.currentPageIndex * this.pageSize;
        const end = (this.currentPageIndex + 1) * this.pageSize;

        this._store.dispatch(
            new GetPokemonDetailsList({ searchQuery: this.searchQuery, params: { start, end, pageSize: this.pageSize } }))
            .subscribe(() => {
                this.filteredPokemon$ = this._store.select(
                    PokemonState.filteredPokemon(this.searchQuery, { start, end })
                );
            });
        this.filteredPokemonCount$ = this._store.select(PokemonState.filteredPokemonCount(this.searchQuery));
    }
}
