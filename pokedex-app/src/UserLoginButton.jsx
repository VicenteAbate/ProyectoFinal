import { useState } from "react";

const UserLogin = (props) => {

    const [userName, setUserName] = useState()

    const setJwt = async () => {
        try {
            const respuesta = await fetch("http://localhost:3000/pkmn/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mail: userName,
                    password: userPass,
                })
            })

            const respuestaJson = await respuesta.json();
            console.log(respuestaJson)
            localStorage.setItem("jwt", respuestaJson.token)
        } catch (error) {
            console.log(error)

        }
    };
    const [userPass, setUserPass] = useState()

    const onClick = (e) => {
        e.preventDefault();
        setJwt();
    }

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    };

    const onChangeUserPass = (e) => {
        setUserPass(e.target.value);

    };
    return (
        <div className="loginImageContainer">
            <button onClick={props.showOrHideLogin} className="login-button">
                Log In
            </button>
            {props.showImage ? (
                <form action="" className="form-login">
                    <div className="login-form-sections">
                        <span>Welcome to</span>
                        <span> <br /> </span>
                        <span>Pokedex</span>
                        <div> <br /> </div>
                        <div className="form-div-login">
                            <label htmlFor="">Email</label><input
                                value={userName}
                                id="pkmn"
                                type="text"
                                name="pkmn"
                                placeholder="Username or Email"
                                className="input-form"
                                onChange={onChangeUserName} required />
                        </div>
                        <div className="form-div-login">
                            <label htmlFor="">Password</label><input
                                value={userPass}
                                id="pkmn"
                                type="password"
                                name="pkmn"
                                placeholder="Password"
                                className="input-form"
                                onChange={onChangeUserPass} required />
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