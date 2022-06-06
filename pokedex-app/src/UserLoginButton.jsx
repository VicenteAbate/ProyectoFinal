



const UserLogin = (props) => {
    return (
        <div className="loginImageContainer">
            <button onClick={props.showOrHideLogin} className="login-button">
                Log In
            </button>
            {props.showImage ? (
                <form action="" className="form-login">
                    <div className="login-form-sections">
                        <span>Welcome to</span>
                        <span> <br/> </span>
                        <span>Pokedex</span>
                        <div> <br /> </div>
                        <div className="form-div-login">
                            <label htmlFor="">Email</label><input type="text" className="input-form" required />
                        </div>
                        <div className="form-div-login">
                            <label htmlFor="">Password</label><input type="password" className="input-form" required />
                        </div>
                        <div className="form-div-login">
                            <button className="login-button">Enviar</button>
                        </div>
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

export default UserLogin;