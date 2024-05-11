import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Inicio = () => {

  const contexto = useContext(PruebaContext)

  // Verifico que me traigo la información que definie en mi contexto
  // console.log(contexto)

  return (
    <div>
      <h1>Inicio</h1>
      <hr />
      <p>Pagina de inicio</p>
      <p>Valor compartido: <strong>{contexto.titulo}</strong></p>
    </div>
  )
}

export default Inicio