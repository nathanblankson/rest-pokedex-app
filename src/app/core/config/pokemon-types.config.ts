enum PokemonTypeEnum {
    NORMAL = 'normal',
    FIRE = 'fire',
    WATER = 'water',
    ELECTRIC = 'electric',
    GRASS = 'grass',
    ICE = 'ice',
    FIGHTING = 'fighting',
    POISON = 'poison',
    GROUND = 'ground',
    FLYING = 'flying',
    PSYCHIC = 'psychic',
    BUG = 'bug',
    ROCK = 'rock',
    GHOST = 'ghost',
    DRAGON = 'dragon',
    DARK = 'dark',
    STEEL = 'steel',
    FAIRY = 'fairy'
}

export interface typeEffectiveness {
    strongVs: string[];
    weakVs: string[];
}

// normal
const normalStrongVs: string[] = [
    PokemonTypeEnum.GHOST
];
const normalWeakVs: string[] = [
    PokemonTypeEnum.FIGHTING
];
// fire
const fireStrongVs: string[] = [
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.STEEL,
    PokemonTypeEnum.FIRE,
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.ICE,
    PokemonTypeEnum.FAIRY
];
const fireWeakVs: string[] = [
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.WATER
];
// water
const waterStrongVs: string[] = [
    PokemonTypeEnum.STEEL,
    PokemonTypeEnum.FIRE,
    PokemonTypeEnum.WATER,
    PokemonTypeEnum.ICE
];
const waterWeakVs: string[] = [
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.ELECTRIC
];
// electric
const electricStrongVs: string[] = [
    PokemonTypeEnum.FLYING,
    PokemonTypeEnum.STEEL,
    PokemonTypeEnum.ELECTRIC

];
const electricWeakVs: string[] = [
    PokemonTypeEnum.GROUND
];
// grass
const grassStrongVs: string[] = [
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.WATER,
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.ELECTRIC
];
const grassWeakVs: string[] = [
    PokemonTypeEnum.FLYING,
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.FIRE,
    PokemonTypeEnum.ICE
];
// ice
const iceStrongVs: string[] = [
    PokemonTypeEnum.ICE
];
const iceWeakVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.STEEL,
    PokemonTypeEnum.FIRE
];
// fighting
const fightingStrongVs: string[] = [
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.DARK,
];
const fightingWeakVs: string[] = [
    PokemonTypeEnum.FLYING,
    PokemonTypeEnum.PSYCHIC,
    PokemonTypeEnum.FAIRY
];
// poison
const poisonStrongVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.FAIRY
];
const poisonWeakVs: string[] = [
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.PSYCHIC
];
// ground
const groundStrongVs: string[] = [
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.ELECTRIC
];
const groundWeakVs: string[] = [
    PokemonTypeEnum.WATER,
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.ICE
];
// flying
const flyingStrongVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.GRASS
];
const flyingWeakVs: string[] = [
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.ELECTRIC,
    PokemonTypeEnum.ICE
];
// psychic
const psychicStrongVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.PSYCHIC
];
const psychicWeakVs: string[] = [
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.GHOST,
    PokemonTypeEnum.DARK
];
// bug
const bugStrongVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.GRASS
];
const bugWeakVs: string[] = [
    PokemonTypeEnum.FLYING,
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.FIRE
];
// rock
const rockStrongVs: string[] = [
    PokemonTypeEnum.NORMAL,
    PokemonTypeEnum.FLYING,
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.FIRE
];
const rockWeakVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.STEEL,
    PokemonTypeEnum.WATER,
    PokemonTypeEnum.GRASS
];
// ghost
const ghostStrongVs: string[] = [
    PokemonTypeEnum.NORMAL,
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.BUG
];
const ghostWeakVs: string[] = [
    PokemonTypeEnum.GHOST,
    PokemonTypeEnum.DARK
];
// dragon
const dragonStrongVs: string[] = [
    PokemonTypeEnum.FIRE,
    PokemonTypeEnum.WATER,
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.ELECTRIC
];
const dragonWeakVs: string[] = [
    PokemonTypeEnum.ICE,
    PokemonTypeEnum.DRAGON,
    PokemonTypeEnum.FAIRY
];
// dark
const darkStrongVs: string[] = [
    PokemonTypeEnum.GHOST,
    PokemonTypeEnum.PSYCHIC,
    PokemonTypeEnum.DARK
];
const darkWeakVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.FAIRY
];
// steel
const steelStrongVs: string[] = [
    PokemonTypeEnum.NORMAL,
    PokemonTypeEnum.FLYING,
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.ROCK,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.STEEL,
    PokemonTypeEnum.GRASS,
    PokemonTypeEnum.PSYCHIC,
    PokemonTypeEnum.ICE,
    PokemonTypeEnum.DRAGON,
    PokemonTypeEnum.FAIRY
];
const steelWeakVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.GROUND,
    PokemonTypeEnum.FIRE
];
// fairy
const fairyStrongVs: string[] = [
    PokemonTypeEnum.FIGHTING,
    PokemonTypeEnum.BUG,
    PokemonTypeEnum.DRAGON,
    PokemonTypeEnum.DARK
];
const fairyWeakVs: string[] = [
    PokemonTypeEnum.POISON,
    PokemonTypeEnum.STEEL
];

export const pokemonTypeEffectiveness = new Map<string, typeEffectiveness>(
    [
        [PokemonTypeEnum.NORMAL, { strongVs: normalStrongVs, weakVs: normalWeakVs }],
        [PokemonTypeEnum.FIRE, { strongVs: fireStrongVs, weakVs: fireWeakVs }],
        [PokemonTypeEnum.WATER, { strongVs: waterStrongVs, weakVs: waterWeakVs }],
        [PokemonTypeEnum.ELECTRIC, { strongVs: electricStrongVs, weakVs: electricWeakVs }],
        [PokemonTypeEnum.GRASS, { strongVs: grassStrongVs, weakVs: grassWeakVs }],
        [PokemonTypeEnum.ICE, { strongVs: iceStrongVs, weakVs: iceWeakVs }],
        [PokemonTypeEnum.FIGHTING, { strongVs: fightingStrongVs, weakVs: fightingWeakVs }],
        [PokemonTypeEnum.POISON, { strongVs: poisonStrongVs, weakVs: poisonWeakVs }],
        [PokemonTypeEnum.GROUND, { strongVs: groundStrongVs, weakVs: groundWeakVs }],
        [PokemonTypeEnum.FLYING, { strongVs: flyingStrongVs, weakVs: flyingWeakVs }],
        [PokemonTypeEnum.PSYCHIC, { strongVs: psychicStrongVs, weakVs: psychicWeakVs }],
        [PokemonTypeEnum.BUG, { strongVs: bugStrongVs, weakVs: bugWeakVs }],
        [PokemonTypeEnum.ROCK, { strongVs: rockStrongVs, weakVs: rockWeakVs }],
        [PokemonTypeEnum.GHOST, { strongVs: ghostStrongVs, weakVs: ghostWeakVs }],
        [PokemonTypeEnum.DRAGON, { strongVs: dragonStrongVs, weakVs: dragonWeakVs }],
        [PokemonTypeEnum.DARK, { strongVs: darkStrongVs, weakVs: darkWeakVs }],
        [PokemonTypeEnum.STEEL, { strongVs: steelStrongVs, weakVs: steelWeakVs }],
        [PokemonTypeEnum.FAIRY, { strongVs: fairyStrongVs, weakVs: fairyWeakVs }]
    ]
);
