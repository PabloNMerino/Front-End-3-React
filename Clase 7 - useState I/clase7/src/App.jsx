import Calculadora from './Calculadora/Calculadora'
import './App.css'
import { useState } from 'react'

function App() {

  const [sum, setSum] = useState(0)

  const sumaTotal = (valor) => {
    setSum(sum + valor)
  }

  return (
    <>
      <Calculadora amount={1} onEqual={sumaTotal}/>
      <Calculadora amount={5} onEqual={sumaTotal}/>
      <Calculadora amount={13} onEqual={sumaTotal}/>
      <h2>Total: {sum}</h2>
    </>
  )
}

export default App
