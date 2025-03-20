import axios from "axios"

export function getPokemon() {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.data)
}

export function getPokemonDetails(pokemon) {
    return axios.get(pokemon.url).then(response => response.data)
}

export function searchPokemon(name) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.data)
}