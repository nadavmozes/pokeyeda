import axios from 'axios';
export const options = {
    headers: { 'fe67ed18-4c22-491f-9964-6636489b54e5': true }
};
export const pokemonTCG = {
    // PokemonTcg,
    PokemonCards

}
// async function PokemonTcg() {
//     await axios.get('https://api.pokemontcg.io/v2/cards', options)
//         .then(response => {
//             console.log(response.data)
//         })
//         .catch(error => console.log(error))
// }
async function PokemonCards() {
    try {
        let res = await axios.get('https://api.pokemontcg.io/v2/cards', options);
        // return res.data.results.map(async function (pokemon) {
        //     let info = await axios.get(pokemon.url)
        //     return info.data;
        // })
        console.log('res',res)
        return res
    } catch (err) {
        console.log("failed to get pokemons info", err);
    }
}