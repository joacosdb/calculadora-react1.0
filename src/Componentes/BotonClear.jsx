import React from 'react'
import '../Estilos/botonClear.css'

export const BotonClear = (props) => {
  return (
    <button className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </button>
  )
}
