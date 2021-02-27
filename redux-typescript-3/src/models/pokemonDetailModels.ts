export type pokemonDetail = {
    sprites: pokemonDetailSprites,
    abilities: pokemonDetailAbility[],
    stats: pokemonDetailStat[]
}

export type pokemonDetailSprites = {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
}

export type pokemonDetailAbility = {
    ability: {
        name: string
    }
}

export type pokemonDetailStat = {
    base_stat: number,
    stat: {
        name: string
    }
}