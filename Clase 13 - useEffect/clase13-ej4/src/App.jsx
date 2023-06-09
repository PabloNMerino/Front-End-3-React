import { useState } from 'react'
import './App.css'
import Pedido from './components/pedido'

function App() {
  const [inProgress, setInProgress] = useState(false)

  const handleCancelar = () => {
    setInProgress(false)
  }

  return (
    <>
      {
        (!inProgress) ? <button onClick={() => {setInProgress(true)}}>Hacer Pedido</button> : <Pedido  cancelar={handleCancelar}/>
      }
    </>
  )
}

export default App
