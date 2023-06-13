import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = async () => {
    const dataFetched = await fetch('https://cat-fact.herokuapp.com/facts/random')
    const dataJson = await dataFetched.json()
    setText(dataJson.text)
  }

  return (
    <>
      <button onClick={fetchData}>Siguiente facto</button>
      {
        text? <p>{text}</p> : undefined
      }
    </>
  )
}

export default App
