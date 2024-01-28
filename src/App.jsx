
import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
 const [pacientes, setPacientes] = useState([]); //Array de objetos
 const [paciente, setPaciente] = useState({}); //Objeto


 const eliminarPaciente = id => {
    const nuevosPacientes = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(nuevosPacientes);
  }
  return (
    <div className="container mx-auto ">

        <Header/>

      <div className=" mt-12 md:flex">
        <Formulario 

          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}




        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>
    </div>
  )
}

export default App
