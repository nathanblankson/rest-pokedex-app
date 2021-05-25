import { Selector } from '@ngxs/store';

import { IPokemonStateModel } from './pokemon-state.model';

export class PokemonSelectors {

    @Selector()
    public static allPokemonDetails(state: IPokemonStateModel): IPokemonStateModel {
        return state;
    }

}
