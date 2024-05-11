import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

const Inicio = () => {

  const { usuario, setUsuario } = useContext(PruebaContext)

  return (
    <div>
      <h1>Inicio</h1>
      <hr />
      <p>Pagina de inicio</p>
      <p>Nombre: {usuario.nombre}</p>
      <p>Web: {usuario.web}</p>
      {/* <p>Valor compartido: <strong>{contexto.titulo}</strong></p> */}
    </div>
  )
}

export default Inicio