export type pokemonListItem = {
    count: number,
    results: pokemonListItemResults[]
}

export type pokemonListItemResults = {
    name: string,
    url: string
}