import axios from "axios";

const get = (url) => axios.get(url).then((req) => req.data);

export const getPokemons = () => get('https://pokeapi.co/api/v2/pokemon')
export const getPokemon = (url) => get(url)
export const getPokemonsInfo = () => getPokemons()
  .then((data) => {
    return Promise.all(
      data.results.map(
        (pokemon) => getPokemon(pokemon.url)
      )
    )
  })
  .catch(() => { throw new Error('pasaron cosas') })

export const getPokemonFromId = (id) => get(`https://pokeapi.co/api/v2/pokemon/${id}`)