// import { useState } from "react";



// const Boton = () => {


//     // const [formNueovPokemon, setFormNueovPokemon] = useState("")

//     function formNueovPokemon() {


//         console.log('You clicked Nuevo Pokemon.');

//         return (
//         <form action="">
//         <input type="text" />Name
//         </form>)
//       }

//     return <div >
//         <button className="nuevo-pokemon-btn" onClick={formNueovPokemon}>Nuevo Pokemon</button>
//     </div>
// }

const Boton = (props) => {
    return (
        <div className="treeImageContainer">
            <button onClick={props.showOrHideImage} className="nuevo-pokemon-btn">
                Nuevo Pokemon
            </button>
            {props.showImage ? (
                <form action="" className="form-nuevo-pkmn">
                    <div className="form-div">
                        <label htmlFor="">Pokemon Name</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Pokemon Element1</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Pokemon Element2</label><input type="text" className="input-form"/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Pokemon ID</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                       <button className="nuevo-pokemon-btn">Enviar</button>
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