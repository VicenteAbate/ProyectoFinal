import './App.css';
import Buscador from './Buscador';
import Detalles from './Detalles';
import Boton from './Boton';
import { useState } from "react";

function App(props) {
  const [showThings, setShowThings] = useState(false);

  const showOrHide = () => {
    setShowThings(!showThings);
  };
  return (
    <>
       <Boton showImage={showThings} showOrHideImage={showOrHide} />
      <Buscador />
      <Detalles />
     
    </>
  );
}
export default App;
