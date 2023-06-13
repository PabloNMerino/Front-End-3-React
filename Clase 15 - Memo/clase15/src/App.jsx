import { useEffect, useMemo, useState } from 'react'
import products from './json/products.json'
import planets from './json/planets.json'
import Product from './components/products'
import Book from './components/books'

import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [numberThree, setNumberThree] = useState(0)
  const [planet, setPlanet] = useState('')


  const memorizedSum = useMemo(()=>{
    console.log('Calculating sum...');
    return parseInt(numberOne) + parseInt(numberTwo)
  }, [numberOne, numberTwo])

  const memorizedHighPrices = useMemo(()=>{
    console.log('getting all prices above $50...');
    return products.filter(product => product.precio > 50)
  }, [])

  const handlePlanet = (newPlanet) => {
    setPlanet(newPlanet)
  }

const memorizedPlanet = useMemo(() => {
console.log(`Getting all "${planet}" books`);
return planets.filter(planetJson => planetJson.planeta===planet)
}, [planet])

useEffect(()=>{
  console.log(memorizedPlanet);
},[planet])

  return (
    <>
      <form>
        <input type="number" value={numberOne} onChange={(e) =>setNumberOne(e.target.value)}/>
        <input type="number" value={numberTwo} onChange={(e)=>setNumberTwo(e.target.value)}/>
        <input type="number" value={numberThree} onChange={(e)=>setNumberThree(e.target.value)}/>
      </form>
      {numberOne && numberTwo? <p className='resultado'>La suma es de los 2 primeros valores es: {memorizedSum}</p>: undefined}
      {
        memorizedHighPrices.map(product => {
          return(
            <Product key={product.id}>
              <p>{product.nombre}</p>
              <p>{product.precio}</p>
              <p>{product.descripcion}</p>
            </Product>
          )
        })
      }
      <Book getPlanet={handlePlanet}/>
      {
        memorizedPlanet.map(planetMemorized => {
          return(
            <div key={planetMemorized.id} className='planetaBox'>
              <p>{planetMemorized.nombre}</p>
              <p>{planetMemorized.planeta}</p>
              <p>{planetMemorized.año}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
