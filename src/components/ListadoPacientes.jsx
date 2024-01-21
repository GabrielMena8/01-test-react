import Paciente from "./Paciente"
function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      <h2 className="text-3xl font-black mb-4 text-center"> Administra tus pacientes </h2>

      <p className="mt-4 text-center mb-100 text-xl">
        Administra {''}
        <span className="font-bold text-indigo-600  ">tus pacientes</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />


    </div>
  )
}

export default ListadoPacientes