import { Pipe, PipeTransform } from '@angular/core';

import { pokemonStatMap } from '@core/config/pokemon-stats.config';

@Pipe({
    name: 'pokemonStat'
})
export class PokemonStatPipe implements PipeTransform {

    transform(value: string, ...args: any[]): string | null {
        return pokemonStatMap[value];
    }

}
