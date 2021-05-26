import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetPokemonListDetails, IPokemonStateModel, PokemonState } from '@store/pokemon';
import { Pokeapi } from '@core/models/pokeapi.model';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    @Select(PokemonState)
    public allPokemonData$: Observable<IPokemonStateModel>;

    public pageEvent: PageEvent;
    public pageSize: number = 1;

    constructor(private store: Store) { }

    public ngOnInit(): void {
        const pageParams: Pokeapi.IPageParams = { limit: this.pageSize, offset: 0 };
        this._fetchPokemon(pageParams);
    }

    public onPaginateChange(event: PageEvent): void {
        const page = event.pageIndex;
        const limit = event.pageSize;
        const offset = limit * page;
        this._fetchPokemon({ limit, offset });
    }

    private _fetchPokemon(pageParams: Pokeapi.IPageParams): void {
        this.store.dispatch(new GetPokemonListDetails(pageParams));
    }

}
