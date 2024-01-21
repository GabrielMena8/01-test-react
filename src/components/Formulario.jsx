import {useState, useEffect} from 'react' ;

//State en react
/*
  Almacena el estado de un componente
  El state es un objeto
  El state es inmutable
  El state solo se puede actualizar usando el metodo setState
  El state es asincrono
  El state se inicializa en el constructor o usando hooks

*/ 

// const [cliente, setCliente] = useState({});
// const [citas, setCitas] = useState([]);
// const [count, setCount] = useState(0);



/*Reglas de hooks
  1. No se pueden llamar en loops, condiciones o funciones anidadas
  2. Solo se pueden llamar desde componentes funcionales o custom hooks
  3. Nunca despues de un return

  Reglas de useState
  1. No se puede llamar condicionalmente
  2. Solo se puede llamar desde el nivel mas alto
  3. Solo se puede llamar desde React function components
  4. Solo se puede llamar desde custom hooks
  5. No se puede llamar desde funciones javascript
  6. No se puede llamar desde callbacks
  7. No se puede llamar desde funciones anidadas
  8. No se puede llamar desde clases


*/ 
function Formulario() {

  const [nombre ,setNombre] = useState('');
  const [mail ,setMail] = useState('');
  const [mascota ,setMascota] = useState('');
  const [alta ,setAlta] = useState('');
  const [sintomas ,setSintomas] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
  }




  return (  
    
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="text-3xl font-black mb-4 text-center" >Crear Cita</h2>

      <p className="mt-4 text-center mb-100 text-3xl">
        Ingresa Pacientes y {''}
        <span className="font-bold text-indigo-600 ">agrega una cita</span>
      </p>
      
      
      <form onSubmit={
        handleSubmit
        }

      className="bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4 mx-5">
        <div className="mb-5">
          <label className="block text-gray-700 text-md font-bold mt-4 " htmlFor="propietario">Nombre propietario</label>
          <input
            className=" border-2 placeholder-indigo-300 placeholder:font-bold rounded-md w-full py-2 px-3 text-gray-700"
            id="propietario" 
            type="text"
            placeholder="Juan"
            value={nombre}
            onChange = { (e) => setNombre(e.target.value) }
            
            
          />
        </div>



        <div className="mb-5">
          <label className="block text-gray-700 text-md font-bold mt-4 " htmlFor="mail">Email contacto</label>
          <input
            className="border-2 placeholder-indigo-300 placeholder:font-bold rounded-md w-full py-2 px-3 text-gray-700"
            id="mail" 
            type="mail"
            placeholder="pop@gmail.com"
            value={mail}
            onChange = { (e) => setMail(e.target.value) }
            //value={mail}
          />

        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-md font-bold mt-4 " htmlFor="nombre">Nombre Mascota</label>
          <input
            className=" border-2 placeholder-indigo-300 placeholder:font-bold rounded-md w-full py-2 px-3 text-gray-700"
            id="nombre" 
            type="text"
            placeholder="Pepito"
            value={mascota}
            onChange = { (e) => setMascota(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-md font-bold mt-4" htmlFor="alta">Fecha de alta</label>
          <input
            className=" border-2 placeholder-indigo-300 placeholder:font-bold mb-4 rounded-md w-full py-2 px-3 text-gray-700"
            id="alta" 
            type="date"
            value={alta}
            onChange = { (e) => setAlta(e.target.value) }
          />

        <label className="block text-gray-700 text-md font-bold mt-4" htmlFor="Sintomas">Sintomas</label>
          <textarea 
          className=" border-2 placeholder-indigo-300 placeholder:font-bold rounded-md w-full py-2 px-3 text-gray-700"
          id="Sintomas" 
      
          placeholder="Describe los sintomas"
          value={sintomas}
          onChange = { (e) => setSintomas(e.target.value) }
          />
        </div>
        <input
          className="bg-indigo-500 cursor-pointer transition-all hover:bg-indigo-600 w-full mt-5 p-2 text-white uppercase font-bold"
          type="submit"
          value="Agregar cita"
          
          />
      </form>
    </div>
  )
}

export default Formulario