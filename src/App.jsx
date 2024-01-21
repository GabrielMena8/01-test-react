import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Paciente from "./components/Paciente"

function App() {
 
  return (
    <div className="container mx-auto ">
        <Header/>
      <div className=" mt-12 md:flex">
        <Formulario />
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
