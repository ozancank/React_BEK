export type pokemonList = {
    count: number,
    results: pokemonListResults[]
}

export type pokemonListResults = {
    name: string,
    url: string
}