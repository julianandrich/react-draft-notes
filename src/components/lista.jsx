import React, { useState } from 'react';

const Lista = () => {
  
  const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5]);
  
  const [numero, setNumero] = useState(6);

  const agregarElemento = () => {
    
    setNumero(numero + 1)
    
    setArrayNumero([
      ...arrayNumero,
      numero
    ]);
    
  }
   
  return (
    <div>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
        // map con {} pide que se retorne algo así que se debe poner return, sino no poner las {} 
        arrayNumero.map((item, index) =>
          <p key={index}>El item {item} es {index}</p>
        )
      }
    </div>
  );
}
 
export default Lista;