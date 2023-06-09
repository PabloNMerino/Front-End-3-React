import { useState } from 'react'
import './App.css'
import ActiveComponent from './components/activeComponent';

function App() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <>
      <button onClick={handleClick}>Toggle!</button>
      {
        active ? <ActiveComponent /> : null
      }
    </>
  )
}

export default App
