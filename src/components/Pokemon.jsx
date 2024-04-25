import { useEffect, useState } from "react";
import { getPokemonFromId } from "../service/Api";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const id = localStorage.getItem('pokemon');
        const data = await getPokemonFromId(id);
        setPokemon(data);
      } catch {
        navigate('/')
      }
    }
    getPokemon();
  }, [])

  return (
    <div>
      Pokemon: {pokemon.name}
    </div>
  )
}

export default Pokemon;