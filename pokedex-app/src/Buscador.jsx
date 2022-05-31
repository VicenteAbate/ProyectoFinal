import { useState } from "react";
import Pokemons from "./pokemons.js";
import pokeball from "./img/Pokeball.png"



const Buscador = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const pokemons = Pokemons()

  const filterPokemons = (pokemones) => pokemones.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const pokemonsFilter = filterPokemons(pokemons)

  return <div className="Buscador-box">
    <div className="titulo-h1-img">
      <h1 className="titulo-pokedex-buscador"><img className="Pokeball-titulo" src={pokeball} alt="" />Pokedex</h1>
    </div>
    <div className="input-buscador">
      <input className="input-buscador-pokemons" type="text" placeholder='Search' onChange={event => { setSearchTerm(event.target.value) }} />
    </div>
    <div className="small-card">
      {pokemonsFilter.map((pokemon, key) => {
        return (

          <div className={`${"separacion-pokemons"} ${pokemon.elements.element1}`} key={key}>
            <div className="id-buscador">
              <p className={`${"color-id-buscador"} ${pokemon.elements.element1}`}>{pokemon.id}<br /></p>
            </div>
            <div className="pokemons-buscador">
              <img className="Img-pokemons-buscador" src={pokemon.img} alt="figura pokemon" /><br />
            </div>
            <div className={`${"nombre-buscador"} ${pokemon.elements.element1}`}>
              <h3 className={`${'color-nombre--buscador'} ${pokemon.elements.element1}`}>{pokemon.name}</h3>
            </div>
          </div>

        )

      })}
    </div>
  </div>
}
export default Buscador;



/*  <h3>About</h3>
      <span><b>WEIGHT</b>{pokemon.about.weight}</span> <br/>
      <span><b>HEIGHT</b>{pokemon.about.height}</span> <br/>
      <span><b>MOVES</b>{pokemon.about.moves}</span> <br/>
      {pokemon.info}<br/>
      <h3>Base Stats</h3>
      <span><b>HP</b>{pokemon.baseStats.hp}</span> <br/>
      <span><b>ATK</b>{pokemon.baseStats.atk}</span> <br/>
      <span><b>DEF</b>{pokemon.baseStats.def}</span> <br/>
      <span><b>SATK</b>{pokemon.baseStats.satk}</span> <br/>
      <span><b>SDEF</b>{pokemon.baseStats.sdef}</span> <br/>
      <span><b>SPN</b>{pokemon.baseStats.spd}</span> <br/>
       */





