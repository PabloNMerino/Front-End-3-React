import Form from './components/Form'
import Plato from './components/Plato'

import './App.css'
import { useState } from 'react'

let autoId = 0;

function App() {

  const [platos, setPlatos] = useState([])

  const handleSubmit = (plato) => {
    setPlatos([...platos, {id: autoId++, nombre: plato}])
  }

  const handleDelete = (id) => {
    setPlatos(platos.filter(plato => plato.id !== id))
  }


  return (
      <div>
        <Form onSubmit={handleSubmit}/>
        <h3>Pedidos: </h3>
        <div className='platos'>
        {
          platos.map(plato => {
            return(
              <Plato key={plato.id} nombre={plato.nombre} onClick={handleDelete} id={plato.id}/>
            )
          })
        }
        </div>
      </div>
  )
}

export default App
