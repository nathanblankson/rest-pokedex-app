import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetPokemonListDetails, IPokemonStateModel, PokemonState } from '@store/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

    @Select(PokemonState)
    public allPokemonData$: Observable<IPokemonStateModel>;

    constructor(private store: Store) { }

    public ngOnInit(): void {
        this.store.dispatch(new GetPokemonListDetails({ limit: 3, offset: 0 }));
    }

}
