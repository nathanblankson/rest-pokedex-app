import { Pipe, PipeTransform } from '@angular/core';

import { pokemonStatMap } from '@core/config/pokemon-stats.config';

@Pipe({
    name: 'pokemonStat'
})
export class PokemonStatPipe implements PipeTransform {
    transform(value: string): string {
        return pokemonStatMap[value] || value;
    }
}
