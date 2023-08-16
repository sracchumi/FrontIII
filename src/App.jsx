import { useState } from "react";
import Card from "./Card";
function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [pelicula, setPelicula] = useState("");
  const [carta, setCarta] = useState(false);

  function handlerNombre(e){
    setNombre(e.target.value)
  }

  function handlerPelicula(e){
    setPelicula(e.target.value)
  }

  function registrar(e){
    e.preventDefault();
    if(nombre.length < 3 || pelicula.length <6){
      alert("Por favor chequea que la información sea correcta");
    }
    else{
      setCarta(true);
    }
      
    
  }

  return (
    <div className="App">
      <h1>Elige tu pelicula preferida</h1>
      <form onSubmit={registrar}>
      <div>
        <input type="text" onChange={handlerNombre} placeholder="Ingresa tu nombre" />
        <input type="text" onChange={handlerPelicula} placeholder="Ingresa tu pelicula preferida" />
        <button type="submit">Enviar</button>
        {carta && <Card nombre = {nombre} pelicula = {pelicula} />}
      </div>
      </form>
      
    </div>
    
  );
}

export default App;
