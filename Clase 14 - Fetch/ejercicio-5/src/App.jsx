import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)

  const dataFetch = async() => {
    try{
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data.map((post)=>{ return { id: post.id, body: post.body, title: post.title }}))
    } catch(error) {
      setApiError(error)
    } finally{
      setLoading(false)
    }

  }

  useEffect(()=>{
    dataFetch()
  },[])

  const handleSubmit = async(value) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
    {method: 'POST', body: JSON.stringify({title: value.title, body: value.body}), 
    headers: {'Content-type': 'application/json; charset=UTF-8'}}).json()
    console.log(response);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <textarea type="text" name="text" id="text" />
        </div>
        <button type='submit'>Guardar</button>
      </form>
      {
        loading? <p>cargando...</p> : undefined
      }
      
      {apiError && <p>{apiError.message}</p>}
{
   posts? posts.map(post => {
    return(
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
   }) : undefined
}
      
    </>
  )
}

export default App
