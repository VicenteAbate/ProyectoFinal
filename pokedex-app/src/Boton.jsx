import { useState } from "react";


const Boton = (props) => {

    const [pokemonName, setPokemonName] = useState();
    const [pokemonCode, setPokemonCode] = useState();
    const [pokemonPhoto, setPokemonPhoto] = useState();
    const [pokemonElement1, setPokemonElement1] = useState();
    const [pokemonElement2, setPokemonElement2] = useState();
    const [pokemonWeight, setPokemonWeight] = useState();
    const [pokemonHeight, setPokemonHeight] = useState();
    const [pokemonMoves, setPokemonMoves] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();
    const [pokemonHp, setPokemonHp] = useState();
    const [pokemonAtk, setPokemonAtk] = useState();
    const [pokemonDef, setPokemonDef] = useState();
    const [pokemonSatk, setPokemonSatk] = useState();
    const [pokemonSdef, setPokemonSdef] = useState();
    const [pokemonSpd, setPokemonSpd] = useState();

    const onChangePokemonName = (e) => {
        setPokemonName(e.target.value);
    };

    const onChangePokemonCode = (e) => {
        setPokemonCode(e.target.value);
    };

    const onChangePokemonPhoto = (e) => {
        setPokemonPhoto(e.target.value);
    };

    const onChangePokemonElement1 = (e) => {
        setPokemonElement1(e.target.value);
    };

    const onChangePokemonElement2 = (e) => {
        setPokemonElement2(e.target.value);
    };

    const onChangePokemonWeight = (e) => {
        setPokemonWeight(e.target.value);
    };

    const onChangePokemonHeight = (e) => {
        setPokemonHeight(e.target.value);
    };

    const onChangePokemonMoves = (e) => {
        setPokemonMoves(e.target.value);
    };

    const onChangePokemonInfo = (e) => {
        setPokemonInfo(e.target.value);
    };

    const onChangePokemonHp = (e) => {
        setPokemonHp(e.target.value);
    };

    const onChangePokemonAtk = (e) => {
        setPokemonAtk(e.target.value);
    };

    const onChangePokemonDef = (e) => {
        setPokemonDef(e.target.value);
    };

    const onChangePokemonSatk = (e) => {
        setPokemonSatk(e.target.value);
    };

    const onChangePokemonSdef = (e) => {
        setPokemonSdef(e.target.value);
    };

    const onChangePokemonSpd = (e) => {
        setPokemonSpd(e.target.value);
    };

    const formHandler = (e) => {
        e.preventDefault();
        addPokemon();
    }

    const addPokemon = async () => {
        try {
            const respuesta = await fetch("http://localhost:3000/pkmn/pokemon/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code: pokemonCode,
                    name_pokemon: pokemonName,
                    info_pokemon: pokemonInfo,
                    img: pokemonPhoto,
                    "baseStats": {
                        hp: pokemonHp,
                        atk: pokemonAtk,
                        def: pokemonDef,
                        satk: pokemonSatk,
                        sdef: pokemonSdef,
                        spd: pokemonSpd
                    },
                    "about": {
                        weight: pokemonWeight,
                        height: pokemonHeight,
                        moves: pokemonMoves
                    },
                    "elements": {
                        element1: pokemonElement1,
                        element2: pokemonElement2
                    }
                })
            })

            const respuestaJson = await respuesta.json();
            console.log(respuestaJson);
        } catch (error) {
            console.log(error)

        }
    };

    return (
        <div className="treeImageContainer">
            <button onClick={props.showOrHideImage} className="nuevo-pokemon-btn">
                Nuevo Pokemon
            </button>
            {props.showImage ? (
                <form action="" className="form-nuevo-pkmn">
                    <div className="form-sections">
                        <span>Pomekon Info</span>
                        <div className="form-div">np
                            <label htmlFor="">Name</label>
                            <input
                                id="pokemonName"
                                value={pokemonName}
                                name="pokemonName" 
                                onChange={onChangePokemonName}
                                type="text" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">Code</label>
                            <input 
                                id="pokemonCode"
                                value={pokemonCode}
                                name="pokemonCode" 
                                onChange={onChangePokemonCode}
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">Photo</label>
                            <input 
                                id="pokemonPhoto"
                                value={pokemonPhoto}
                                name="pokemonPhoto" 
                                onChange={onChangePokemonPhoto}
                                type="text" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">Element1</label>
                            <input 
                                id="pokemonElement1"
                                value={pokemonElement1}
                                name="pokemonElement1" 
                                onChange={onChangePokemonElement1}
                                type="text" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">Element2</label>
                            <input 
                                id="pokemonElement2"
                                value={pokemonElement2}
                                name="pokemonElement2" 
                                onChange={onChangePokemonElement2}
                                type="text" 
                                className="input-form" />
                        </div>
                    </div>

                    <div className="form-sections">
                        <span>About</span>
                        <div className="form-div">
                            <label htmlFor="">Weight</label>
                            <input 
                                id="pokemonWeight"
                                value={pokemonWeight}
                                name="pokemonWeight" 
                                onChange={onChangePokemonWeight}
                                type="text" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">Height</label>
                            <input 
                                id="pokemonHeight"
                                value={pokemonHeight}
                                name="pokemonHeight" 
                                onChange={onChangePokemonHeight}
                                type="text"
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">Moves</label>
                            <input 
                                id="pokemonMoves"
                                value={pokemonMoves}
                                name="pokemonMoves" 
                                onChange={onChangePokemonMoves}
                                type="text" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">INFO</label>
                            <input 
                                id="pokemonInfo"
                                value={pokemonInfo}
                                name="pokemonInfo" 
                                onChange={onChangePokemonInfo}
                                type="text" 
                                className="input-form" 
                                required />
                        </div>
                    </div>

                    <div className="form-sections">
                        <span>Base Stats</span>
                        <div className="form-div">
                            <label htmlFor="">Hp</label>
                            <input 
                                id="pokemonHp"
                                value={pokemonHp}
                                name="pokemonHp" 
                                onChange={onChangePokemonHp}
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">ATK</label>
                            <input
                                id="pokemonAtk"
                                value={pokemonAtk}
                                name="pokemonAtk" 
                                onChange={onChangePokemonAtk} 
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">DEF</label>
                            <input 
                                id="pokemonDef"
                                value={pokemonDef}
                                name="pokemonDef" 
                                onChange={onChangePokemonDef}
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">SATK</label>
                            <input 
                                id="pokemonSatk"
                                value={pokemonSatk}
                                name="pokemonSatk" 
                                onChange={onChangePokemonSatk}
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">SDEF</label>
                            <input 
                                id="pokemonSdef"
                                value={pokemonSdef}
                                name="pokemonSdef" 
                                onChange={onChangePokemonSdef}
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                        <div className="form-div">
                            <label htmlFor="">SPD</label>
                            <input
                                id="pokemonSpd"
                                value={pokemonSpd}
                                name="pokemonSpd" 
                                onChange={onChangePokemonSpd}
                                type="number" 
                                className="input-form" 
                                required />
                        </div>
                    </div>

                    <div className="form-div">
                        <button onClick={formHandler} className="nuevo-pokemon-btn">Enviar</button>
                    </div>
                </form>
            )
                : (
                    <span></span>
                )
            }
        </div>
    );
};

export default Boton;