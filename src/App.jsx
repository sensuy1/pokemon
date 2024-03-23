import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [ pokemons, setPokemons ] = useState([])

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=6 ')
      setPokemons(response.data.results)
    }
    getPokemon()
  }, [])

  return (
    <div>
      <div>
        <div className='block'>
        {pokemons && pokemons.map((pokemon) => (
          <div className='carts'>
              <img src={pokemon.img} alt="pokemon" />
              {pokemon.name}
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default App