import './App.css';
import logoJ from '../src/Img/android-chrome-192x192.png';
import Boton from '../src/Componentes/Boton';
import {Pantalla} from '../src/Componentes/Pantalla';
import {BotonClear} from '../src/Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

const [input, setinput] = useState('')

const agregarInput = valor => {
  setinput(input + valor);
}

const calcularResultado = () => {
  if (input) {
    setinput(evaluate(input));
}
   else {
    return alert("Por favor, introduzca valores para realizar la operación")
}
}

  return (
    <div className='App'>
      <div className='logo-contenedor'>
         <img  className="logo" src={logoJ} alt="logo J" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
         <Boton manejarClic={agregarInput}>7</Boton>
         <Boton manejarClic={agregarInput}>8</Boton>
         <Boton manejarClic={agregarInput}>9</Boton>
         <Boton manejarClic={agregarInput}>+</Boton>
         </div>
         
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
          
        <div className="fila">
          <BotonClear manejarClear={() =>setinput('')}>
            Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
