import { useState, useEffect } from "react";
//import Pokemons from "./pokemons.js";
import pokeball from "./img/Pokeball.png"




const Buscador = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [pokemons, setPokemons] = useState([]);

 // const pokemons = Pokemons();
 // const pokemons = Pokemons();


  useEffect(() => {
    const getData = async () => {
    
      try {
        const respuesta = await fetch("http://localhost:3000/pkmn/pokemon", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
   
        const respuestaJson = await respuesta.json();
        console.log(respuestaJson.data)
        setPokemons(respuestaJson.data);
      } catch (error) {
        console.log(error)
       
      };

    }
    getData();
  }, []);


  console.log(pokemons);

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








