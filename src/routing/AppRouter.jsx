import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom"

import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import Acerca from '../components/Acerca'
import Login from '../components/Login'

const AppRouter = () => {

  const { usuario, setUsuario } = useContext(PruebaContext)

  return (
    <BrowserRouter>

      <header className="header">
        {/* MENU DE NAVEGACIÒN */}
        <nav>
          <div className="logo">
            <h2>About useContext</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Incio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/acerca">Arceca de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>          
              {
                usuario.username !== null

                  ? (
                    <>
                      <li>
                        <NavLink to="/">Hola; {usuario.nombre}</NavLink>
                      </li>
                      <li>
                        <a href="#" onClick={e => {
                          e.preventDefault()
                          // setiamos el objeto, ya que solo pasando null como valor a la funcion modificadora me genera error
                          setUsuario({
                            username: null,
                            nombre: "christian",
                            web: "otraweb.cl"
                          })
                        }}>Cerrar sesión</a>
                      </li>
                    </>
                  )
                  : <NavLink to="/login">Login</NavLink>
              }      
          </ul>
        </nav>
      </header>

      <section className="content">
        {/* CONFIGURACIÓN DE RUTAS */}

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />

          <Route path='/*' element={<div>
            <h1>ERROR ESTA PAGINA NO EXISTE</h1>
          </div>} />

        </Routes>
      </section>


    </BrowserRouter>
  )
}

export default AppRouter