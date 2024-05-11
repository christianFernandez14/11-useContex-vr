import { useEffect, useState } from "react"
import { PruebaContext } from "./context/PruebaContext"
import AppRouter from "./routing/AppRouter"

const App = () => {

  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    console.log('USE EFFECT UNA VEZ')
    // Se carga la primera vez el componente
    let usuario_local = JSON.parse(localStorage.getItem("usuario"))
    
    setUsuario(usuario_local)
  }, [])
  
  useEffect(() => {
    console.log('USE EFFECT CUANDO HAY CAMBIOS')
    // Esto guardara en LS, cada vez que haya un cambio ene l LS
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])


  return (
    <>
      {/* Es la manera que todos mis componentes que estan dentro del routing pueda saber la info */}
      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>
    </>
  )
}

export default App
