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

      {/* MENU DE NAVEGACIÒN */}

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

    </BrowserRouter>
  )
}

export default AppRouter