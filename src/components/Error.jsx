
function Error(props) {
  return (
    <div>
              <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <span className="font-bold">Error!</span> {props.mensaje}
              </p>
    </div>
  )
}

export default Error