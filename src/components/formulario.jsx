import React, { useState } from 'react';

const Formulario = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : [event.target.value]
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.apellido)
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className='col-md-3'>
          <input type="text" placeholder="Nombre" className='form-control' name='nombre' onChange={handleInputChange} />
        </div>
        <div className='col-md-3'>
          <input type="text" placeholder='Apellido' className='form-control' name='apellido' onChange={handleInputChange} />
        </div>
        <div className='col-md-3'>
          <button type="submit" className='btn btn-primary'>Enviar</button>
        </div>
      </form>
      <h3>{datos.nombre} {datos.apellido}</h3>
    </div>
  );
}
 
export default Formulario;