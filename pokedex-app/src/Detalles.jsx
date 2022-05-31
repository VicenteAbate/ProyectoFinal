import { useEffect, useState } from "react";
import Pokemons from "./pokemons.js";
import CardPokemon from "./CardPokemon"

const Detalles = () => {

    const [listaPokemons, setListaPokemons] = useState(null);

    useEffect(() => {
        const getData = async () => {

            try {
                const response = Pokemons();

                setListaPokemons(response);


            } catch (error) {
                console.log("Hay un error en tu API");

            }

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

