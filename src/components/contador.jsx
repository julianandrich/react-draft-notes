import React, { useState, Fragment} from 'react';

// sfc == Stateless Function Component
const Contador = () => {
  
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    console.log('me diste un click');
    setNumero(numero + 1);
  }

  const restar = () => {
    setNumero(numero - 1);
  }
   
  return (
    <Fragment>
      <h3>Mi primer componente es un contador {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={restar}>Restar</button>
    </Fragment>
   );
}
 
export default Contador;
