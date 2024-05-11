import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'


const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)

  const gurdarDatos = e => {
    e.preventDefault()

    // Verifico que estoy tomando los valores de los input, en es caso de Input - nick
    // console.log(e.target.nick.value)

    let usuario_datos = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value
    }

    // verifico que estoy todo los datos del objeto.
    // console.log(usuario)

    setUsuario(usuario_datos)

  }


  return (
    <div>
      <h1>Login</h1>

      <form className='login' onSubmit={gurdarDatos}>

        <input type="text" name="nick" placeholder='NickName...' />
        <input type="text" name="nombre" placeholder='Nombre...' />
        <input type="text" name="web" placeholder='Tu pagina...' />

        <input type="submit" value="enviar" />

      </form>
    </div>
  )
}

export default Login