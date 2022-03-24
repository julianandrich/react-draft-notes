import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Contador from './components/contador';
import Temperatura from './components/temperatura';
import Producto from './components/producto';
import Lista from './components/lista';
import Formulario from './components/formulario';


function App() {
  return (
    <div className="App">
      <h1>Hola soy React</h1>
      <div className='container mt-5'>
        <Formulario />
      </div>

      <Lista />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Contador />

      <Temperatura />

      <Producto />


    </div>
  );
}

export default App;
