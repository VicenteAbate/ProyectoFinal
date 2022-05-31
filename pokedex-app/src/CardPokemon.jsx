import './App.css';
import pokebola from "./img/Pokeball.png"

const CardPokemon = (props) => {

    const { pokemon, index, className } = props


    return (

        <div className={`${"tarjeta-general"} ${pokemon.elements.element1}`}>
            <div className={`${"nombre-id-tarjeta"} ${pokemon.elements.element1}`}>
                <h2 key={index} className="poke-name">{pokemon.name}</h2>
                <p className="card-pokemon-id">{pokemon.id}</p>
                <img src={pokebola} alt="figura pokebola" className="pokebola" />

            </div>
            <div className={className}>
                <figure>
                    <img id="Img-pokemons-buscador" src={pokemon.img} alt="figura pokemon" className="imagen" />
                    <span className="elements-span">
                        <p className={`${"elementos-parrafo"} ${pokemon.elements.element1}`}>{pokemon.elements.element1}</p>
                        {pokemon.elements.element2 != null && <p>{pokemon.elements.element2}</p>}
                    </span>
                </figure>
                <div>
                    <h3 className={`${"h3-about"} ${pokemon.elements.element1}`} >About</h3>
                    <ul className="list-about">
                        <li className="itmes-about"><span className="weight-icon">{pokemon.about.weight}</span><span className="subtitles-about">Weight</span> </li>
                        <li className="itmes-about height"><span className="height-icon">{pokemon.about.height}</span><span className="subtitles-about">Height</span> </li>
                        <li className="itmes-about"><span>{pokemon.about.moves}</span><span className="subtitles-about">Moves</span></li>
                    </ul>
                </div>
                <p className="pokemon-info">{pokemon.info}</p>
                <div>
                    <h3>Base Stats</h3>
                    <div className="lists-base-stats">
                        <ul className={`${"table-elements"} ${pokemon.elements.element1}`}>
                            <li><span >HP</span> </li>
                            <li><span >ATK</span></li>
                            <li><span >DEF</span></li>
                            <li><span >SATK</span></li>
                            <li><span >SDEF</span> </li>
                            <li><span >SPN</span></li>
                        </ul>
                        <ul className="table-numbers">
                            <li> <span>{pokemon.baseStats.hp}</span></li>
                            <li>  <span>{pokemon.baseStats.atk}</span></li>
                            <li>  <span>{pokemon.baseStats.def}</span></li>
                            <li>  <span>{pokemon.baseStats.satk}</span></li>
                            <li>  <span>{pokemon.baseStats.sdef}</span></li>
                            <li>   <span>{pokemon.baseStats.spd}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardPokemon;