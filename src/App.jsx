import { useEffect, useState } from "react"
import { PruebaContext } from "./context/PruebaContext"
import AppRouter from "./routing/AppRouter"

const App = () => {

  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    let usuario_local = JSON.parse(localStorage.getItem("usuario"))    
    setUsuario(usuario_local)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])

  return (
    <>      
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
