
const Paciente = ({paciente, setPaciente}=props) => {

  return (
    
    <div className="mx-5  my-4 px-5 py-10 rounded-md bg-white shadow-md ">
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
        Nombre:{''} 
        <span> {paciente.mascota} </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
        Nombre propietario:{''} 
        <span> {paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
        Mail:{''} 
        <span> {paciente.mail}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
        Fecha alta:{''} 
        <span> {paciente.alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
        Sintomas:{''} 
        <span> {paciente.sintomas} </span>
        </p>


        <div className="flex justify-evenly">
          <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold"
            onClick={()=>setPaciente(paciente)}
          >
            Editar paciente
            
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 w-full mt-5 p-2 text-white uppercase font-bold"
          >
            &times; Eliminar 
          </button>


        </div>
    </div>
  )
}

export default Paciente