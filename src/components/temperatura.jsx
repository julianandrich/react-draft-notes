import React from 'react';

const Temperatura = () => {
  
  const temperatura = 21;
  
  return ( 
    <div>
      <h2>¿Frío o calor?</h2>
      <h4>
        {temperatura > 20 ? 'Calor' : 'Frío'}
      </h4>
    </div>
   );
}
 
export default Temperatura;