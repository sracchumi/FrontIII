//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import App from "./App";
function Card({nombre, pelicula}) {
  return (
    <div>
      <h2>Ingresaste</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '20px', borderRadius: '5px' }}>
      <p>nombre : {nombre}</p>
      <p>pelicula : {pelicula}</p>
      </div>
    </div>
  );
}

export default Card;
