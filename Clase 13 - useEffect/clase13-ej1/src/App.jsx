import { useEffect } from 'react'

import './App.css'

function App() {

  useEffect( () => {
    console.log('Hola Mundo!');
  }, [])

  return (
    <p>Hola Mundo!</p>
  )
}

export default App
