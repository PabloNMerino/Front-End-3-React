import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [datos, setDatos] = useState([])

  const fetchData = async () => {
    setLoading(true);
    const dataFetched = await fetch('https://cat-fact.herokuapp.com/facts')
    const dataJson = await dataFetched.json();
    setDatos(
      dataJson.map(dato => ({id: dato['_id'], text: dato.text})
      )
    )
    setLoading(false)
  }

  return (
    <>
      { loading ? <p>cargando datos...</p> : <button onClick={fetchData}>Buscar datos!</button> }
      {
        datos.map( dato => {
          return(
            <div key={dato.id}>
              <p>{dato.text}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
