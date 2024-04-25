import axios from "axios";
import { useEffect, useState } from "react";
import { getPokemon, getPokemons, getPokemonsInfo } from "../service/Api";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    getPokemonsInfo()
      .then((listData) => setList(listData))
      .catch((e) => setError(e.message))
  }, []);

  const setPokemon = (id) => {
    localStorage.setItem('pokemon', id);
    navigate('/pokemon');
  }

  return (
    <div>
      <h1>Pokemons</h1>
      { error && <h2>{error}</h2>}
      {!error && <div>
        { list.map((pokemon) => (
           <button key={pokemon.name} onClick={() => setPokemon(pokemon.id)}>
            {pokemon.name}
          </button>
        ))
        }
      </div>}
    </div>
  )
}

export default PokemonList;