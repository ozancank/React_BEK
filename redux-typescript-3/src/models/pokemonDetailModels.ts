export type pokemonMultiple = {
    name: string,
    sprites: pokemonMultipleSprites,
    abilities: pokemonMultipleAbility[],
    stats: pokemonMultipleStat[]
}

export type pokemonMultipleSprites = {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
}

export type pokemonMultipleAbility = {
    ability: {
        name: string
    }
}

export type pokemonMultipleStat = {
    base_stat: number,
    stat: {
        name: string
    }
}