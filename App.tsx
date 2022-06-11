import * as React from 'react';
import './style.css';

export default function App() {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);

  console.log(pokemon);

  return (
    <div>
      <p>
        {pokemon.map(poke => 
          <h2>{poke.name}</h2>)

        } 
      </p>
    </div>
  );
}
