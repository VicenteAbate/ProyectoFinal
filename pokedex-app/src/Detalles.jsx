import { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon"

const Detalles = () => {

    const [listaPokemons, setListaPokemons] = useState(null);

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
                setListaPokemons(respuestaJson.data);
              } catch (error) {
                console.log(error)
               
              };
        
            }
        getData();
    }, []);

    /* escribir una función que retorne el elemento  */

    return (
        
        <div className="test" >
            {listaPokemons
                && listaPokemons.map((pokemon, index) => (
                    <CardPokemon pokemon={pokemon} index={index} className="contenido-inferior" />

                ))}
            
        </div>
    )

}
export default Detalles;

