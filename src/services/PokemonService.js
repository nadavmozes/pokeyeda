import axios from 'axios'

export const pokemonService = {
    fetchPokemon,
    getById

}
async function fetchPokemon() {
    try {
        let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=251');
        return res.data.results.map(async function (pokemon) {
            let info = await axios.get(pokemon.url)
            return info.data;
        })
    } catch (err) {
        console.log("failed to get pokemons info", err);
    }
}

async function getById(pokemonId) {
    try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        return res.data
    } catch (err) {
        console.log("failed to get pokemons info", err);
    }
}