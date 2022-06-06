import './App.css';
import Buscador from './Buscador';
import Detalles from './Detalles';
import Boton from './Boton';
import UserLogin from './UserLoginButton';
import { useState } from "react";

function App(props) {
  const [showThings, setShowThings] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  
  const showOrHideLogin = () => {
    setshowLogin(!showLogin);
  };

  const showOrHide = () => {
    setShowThings(!showThings);
  };


  return (
    <>
      <UserLogin showImage={showLogin} showOrHideLogin={showOrHideLogin} />
      <Boton showImage={showThings} showOrHideImage={showOrHide} />
      <Buscador />
      <Detalles />

    </>
  );
}
export default App;
