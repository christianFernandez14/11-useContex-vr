import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom"
import Inicio from '../components/Inicio'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import Acerca from '../components/Acerca'
import Login from '../components/Login'

const AppRouter = () => {
  return (
    // Lo que esta dentro de BrowserRouter, es lo que hara funcionar el routing
    <BrowserRouter>

      {/* Lo incluimos dentro de un header para darle estilo a todo del contenedor de header */}
      <header className="header">
        {/* MENU DE NAVEGACIÒN */}
        <nav>
          <div className="logo">
            <h2>About useContex</h2>
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
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
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