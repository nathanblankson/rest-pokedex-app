import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Pokemon } from '@core/models/pokemon.model';
import { GetPokemonDetailsList, GetPokemonResourceList, PokemonState } from '@store/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    public filteredPokemon$: Observable<Pokemon.IPokemon[]>;
    public filteredPokemonCount$: Observable<number>;

    public pokemonSearchFormGroup: FormGroup;

    public pageEvent: PageEvent;
    public pageSize: number = 1;
    public currentPage: number = 0;
    public pageOffset: number = 0;

    constructor(private fb: FormBuilder, private store: Store) {
        this.store.dispatch(new GetPokemonResourceList({ limit: 10000, offset: 0 })).subscribe(() => {
            this.filteredPokemonCount$ = this.store.select(PokemonState.filteredPokemonCount('char'));
            const pageParams = { limit: this.pageOffset + 1, offset: this.currentPage };
            this.store.dispatch(new GetPokemonDetailsList({ searchQuery: 'char', pageParams })).subscribe(() => {
                this.filteredPokemon$ = this.store.select(PokemonState.filteredPokemon('char', pageParams));
            })
        })
    }

    public ngOnInit(): void {
        this._initForm();
    }

    public onPaginateChange(event: PageEvent): void {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.pageOffset = this.pageSize * this.currentPage;
        this._fetchPokemon();
    }

    // TODO: change the parameters / make it more clear
    // limit = end
    // offset = start
    private _fetchPokemon(): void {
        const pageParams = { limit: (this.currentPage + 1) * this.pageSize, offset: this.pageOffset };
        this.store.dispatch(new GetPokemonDetailsList({ searchQuery: 'char', pageParams }));
    }

    private _initForm() {
        this.pokemonSearchFormGroup = this.fb.group({
            searchFilter: ''
        });
    }

}
