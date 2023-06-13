import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitulo] = useState('')
  const [body, setTexto] = useState('')

  const dataFetch = async(e) => {
    e.preventDefault();
    const response = await (await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      }
    })
    ).json()
    console.log(response)
  }

  return (
    <>
      <form onSubmit={dataFetch}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" id="titulo" value={title} onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="texto">Ingrese texto</label>
          <textarea name="texto" id="texto" cols="30" rows="10" value={body} onChange={(e) => setTexto(e.target.value)} />
        </div>
        <button type='submit'>Guardar!</button>
      </form>
    </>
  )
}

export default App
