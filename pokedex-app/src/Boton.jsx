



const Boton = (props) => {
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
                        <label htmlFor="">Name</label><input type="text" className="input-form" required />
                    </div>
                    <div className="form-div">
                        <label htmlFor="">ID</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Photo</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Element1</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Element2</label><input type="text" className="input-form"/>
                    </div>
                    </div>
                    <div className="form-sections">
                    <span>About</span>
                    <div className="form-div">
                        <label htmlFor="">Weight</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Height</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">Moves</label><input type="text" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">INFO</label><input type="text" className="input-form" required/>
                    </div>
                    </div>
                    <div className="form-sections">
                    <span>Base Stats</span>
                    <div className="form-div">
                        <label htmlFor="">Hp</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">ATK</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">DEF</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">SATK</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">SDEF</label><input type="number" className="input-form" required/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="">SPN</label><input type="number" className="input-form" required/>
                    </div>
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