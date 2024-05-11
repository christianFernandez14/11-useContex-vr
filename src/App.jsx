import { useState } from "react"
import { PruebaContext } from "./context/PruebaContext"
import AppRouter from "./routing/AppRouter"

const App = () => {

  // Trabajemos ahora con un estado para ponerle en dispoción en el Contex
  const [usuario, setUsuario] = useState({
    username: "@christianweb",
    nombre: "Christian",
    web: "christian.cl"
  })

  const string = 'Christian Fernandez WEB'

  const curso = {
    id: 1,
    titulo: 'Master en TypeScript',
    contenido: 'Muncho contenido sobre TypeScript'
  }

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
