export namespace Pokeapi {

    export interface IPageParams {
        limit?: string | number;
        offset?: string | number;
    }

    export interface IPokemon {
        abilities: IPokemonAbility[];
        base_experience: number;
        forms: INamedApiResource[];
        game_indices: IGameIndex[];
        height: number;
        held_items: IPokemonHeldItem[];
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: IPokemonMove[];
        name: string;
        order: number;
        past_types: any[];
        species: INamedApiResource;
        sprites: IPokemonSprites;
        stats: IPokemonStat[];
        types: IPokemonType[];
        weight: number;
    }

    export interface INamedApiResource {
        name: string;
        url: string;
    }

    export interface INamedAPIResourceList {
        count: number;
        next: string;
        previous: string | null;
        results: INamedApiResource[];
    }

    export interface IPokemonAbility {
        ability: INamedApiResource;
        is_hidden: boolean;
        slot: number;
    }

    export interface IGameIndex {
        game_index: number;
        version: INamedApiResource;
    }

    export interface IPokemonHeldItem {
        item: INamedApiResource;
        version_details: IPokemonHeldItemVersions[];
    }

    export interface IPokemonHeldItemVersions {
        version: INamedApiResource;
        rarity: number;
    }

    export interface IPokemonMove {
        move: INamedApiResource;
        version_group_details: IPokemonMoveVersion[];
    }

    export interface IPokemonMoveVersion {
        level_learned_at: number;
        move_learn_method: INamedApiResource;
        version_group: INamedApiResource;
    }

    export interface IGenerationV {
        'black-white': IPokemonSprites;
    }

    export interface IGenerationIv {
        'diamond-pearl': IPokemonSprites;
        'heartgold-soulsilver': IPokemonSprites;
        platinum: IPokemonSprites;
    }

    export interface IVersions {
        'generation-i': IGenerationI;
        'generation-ii': IGenerationIi;
        'generation-iii': IGenerationIii;
        'generation-iv': IGenerationIv;
        'generation-v': IGenerationV;
        'generation-vi': { [key: string]: IGenerationVi };
        'generation-vii': IGenerationVii;
        'generation-viii': IGenerationViii;
    }

    export interface IPokemonSprites {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other?: IOther;
        versions?: IVersions;
        animated?: IPokemonSprites;
    }

    export interface IGenerationI {
        'red-blue': IRedBlue;
        yellow: IRedBlue;
    }

    export interface IRedBlue {
        back_default: string;
        back_gray: string;
        front_default: string;
        front_gray: string;
    }

    export interface IGenerationIi {
        crystal: ICrystal;
        gold: ICrystal;
        silver: ICrystal;
    }

    export interface ICrystal {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    }

    export interface IGenerationIii {
        emerald: IEmerald;
        'firered-leafgreen': ICrystal;
        'ruby-sapphire': ICrystal;
    }

    export interface IEmerald {
        front_default: string;
        front_shiny: string;
    }

    export interface IGenerationVi {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    }

    export interface IGenerationVii {
        icons: IDreamWorld;
        'ultra-sun-ultra-moon': IGenerationVi;
    }

    export interface IDreamWorld {
        front_default: string;
        front_female: string;
    }

    export interface IGenerationViii {
        icons: IDreamWorld;
    }

    export interface IOther {
        dream_world: IDreamWorld;
        'official-artwork': IOfficialArtwork;
    }

    export interface IOfficialArtwork {
        front_default: string;
    }

    export interface IPokemonStat {
        base_stat: number;
        effort: number;
        stat: INamedApiResource;
    }

    export interface IPokemonType {
        slot: number;
        type: INamedApiResource;
    }
}
