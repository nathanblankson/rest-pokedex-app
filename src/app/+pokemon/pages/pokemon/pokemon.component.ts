import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { Pokemon } from '@core/models/pokemon.model';
import { GetPokemonDetailsList, GetPokemonResourceList, PokemonState } from '@store/pokemon';
import { Pokeapi } from '@core/models/pokeapi.model';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    public filteredPokemon$: Observable<Pokemon.IPokemon[]>;
    public filteredPokemonCount$: Observable<number>;

    public searchQuery: string = 'char';
    public searchQueryChange: Subject<string> = new Subject<string>();

    @ViewChild('paginator') public paginator: MatPaginator;
    public pageEvent: PageEvent;
    public pageSize: number = 1;
    public currentPage: number = 0;
    public pageOffset: number = 0;

    constructor(private store: Store) {
        this.store.select(PokemonState.pokemonResourceList)
            .pipe(
                tap((pokemonResourceList) => {
                    if (pokemonResourceList == null) {
                        const params: Pokeapi.IPageParams = { limit: 10000, offset: 0 };
                        this.store.dispatch(new GetPokemonResourceList(params));
                    }
                }),
                filter((pokemonResourceList) => pokemonResourceList !== null)
            ).subscribe(() => {
                this._fetchPokemon();
            });
    }

    public ngOnInit(): void { }

    public onSearchFilterChange(value: string): void {
        this._fetchPokemon();
        this.paginator.firstPage();
    }

    public onPaginateChange(event: PageEvent): void {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.pageOffset = this.pageSize * this.currentPage;
        this._fetchPokemon();
    }

    private _fetchPokemon(): void {
        const pageParams = { limit: this.pageOffset + 1, offset: this.currentPage };
        this.store.dispatch(new GetPokemonDetailsList({ searchQuery: this.searchQuery, pageParams })).subscribe(() => {
            this.filteredPokemon$ = this.store.select(PokemonState.filteredPokemon(this.searchQuery, pageParams));
        });
        this.filteredPokemonCount$ = this.store.select(PokemonState.filteredPokemonCount(this.searchQuery));
    }

}
