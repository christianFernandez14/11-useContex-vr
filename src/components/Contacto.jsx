import { useContext } from 'react'
import {PruebaContext} from '../context/PruebaContext'

const Contacto = () => {

  const datosDesdeElContexto = useContext(PruebaContext)

  return (
    <div>
      <h1>Contacto</h1>
      <hr />
      <p>Pagina de Contacto</p>
      <p>Valor compartido: <strong>{JSON.stringify(datosDesdeElContexto.usuario)}</strong></p>

    </div>
  )
}

export default Contacto