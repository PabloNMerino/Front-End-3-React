import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [titulo, setTitulo] = useState('')

  const fetchData = async () => {
    const dataFetched = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const dataJson = await dataFetched.json();
    setTitulo(dataJson.title)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <p>{titulo}</p>
    </>
  )
}

export default App
