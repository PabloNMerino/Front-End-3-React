import { useState } from 'react'

import './App.css'
import SubmitComponent from './components/submitComponent'

function App() {
  const [name, setName] = useState('')
  const [submitedValue, setSubmitedValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitedValue(name)
  }
  return (
    <>
      <form onClick={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type='submit'>Submit!</button>
      </form>
      
      <SubmitComponent name={submitedValue}/>
      
    </>
  )
}

export default App
