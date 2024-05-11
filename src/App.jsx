import { PruebaContext } from "./context/PruebaContext"
import AppRouter from "./routing/AppRouter"

const App = () => {

  const string = 'Christian Fernandez WEB'

  // cambiamos las el value por este variaable ahora para ver como se comporta con  un objeto
  const curso = {
    id: 1,
    titulo: 'Master en TypeScript',
    contenido: 'Muncho contenido sobre TypeScript'
  }

  return (
    <>
      {/* Es la manera que todos mis componentes que estan dentro del routing pueda saber la info */}
      <PruebaContext.Provider value={curso}>
        <AppRouter />
      </PruebaContext.Provider>
    </>
  )
}

export default App
