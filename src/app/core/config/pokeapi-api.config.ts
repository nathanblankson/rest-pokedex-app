/**
 * List of Pokeapi API endpoints.
 * These should be used in Services.
 */
const base = 'https://pokeapi.co/api/v2';

interface IPokeapiApiEndpoints {
    [name: string]: string;
};

export const PokeapiApiEndpoints: IPokeapiApiEndpoints = {
    // POKEMON
    pokemon: `${base}/pokemon`
};

