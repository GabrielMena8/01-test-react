import { useEffect } from "react"
import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">


          {pacientes && pacientes.length ?(
            <>


              <h2 className="text-3xl font-black mb-4 text-center"> Administra tus pacientes </h2>
              <p className="mt-4 text-center mb-100 text-xl">
                Administra {''}
                <span className="font-bold text-indigo-600  ">tus pacientes</span>
              </p>

                {
                pacientes.map((paciente) => (
                    <Paciente 
                      key={Math.random().toString(36)}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
                    />
                ))}


          </>

          ):(
            <>
                <h2 className="text-3xl font-black mb-4 text-center"> No hay pacientes </h2>
                  <p className="mt-4 text-center mb-100 text-xl">
                    Ingresa {''}
                    <span className="font-bold text-indigo-600  ">tus pacientes</span>
                  </p>


            </>
          )}






   


    </div>
  )
}

export default ListadoPacientes