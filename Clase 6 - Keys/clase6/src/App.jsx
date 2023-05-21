import List from './Components/List/List'
import Item from './Components/Item/Item'
import PCard from './Components/ProductCard/ProductCard'

import productos from './Json/products.json'
import usuarios from './Json/users.json'
import cuentas from './Json/accounts.json'

import './App.css'
import Styles from './AppStyles.module.css'

function App() {

const addProduct = ({nombre, precio}) => {
  console.log(`Producto: ${nombre} - Precio: ${precio}`);
}

  return (
    <>

    {/*--- EJERCICIO 1 ---*/}
      <div className={Styles.lista}>
        <List>
          {
            productos.map(producto => {
              return (
                <Item key={producto.id}>
                  <h3>{producto.nombre}</h3>
                  <p>ID: {producto.id}</p>
                  <p>Precio: {producto.precio}</p>
                  <p>Descripción: {producto.descripcion}</p>
                </Item>
              )
            })
          }
        </List>
      </div>

      {/*--- EJERCICIO 2 ---*/}
      <div className={Styles.lista}>
          <List>
            {
              cuentas.map(cuenta => {
                return (
                  <Item key={cuenta.userName}>
                    <a href={`https://twitter.com/${cuenta.account}`}> {cuenta.userName} </a>
                  </Item>
                )
              })
            }
          </List>
      </div>

      {/*--- EJERCICIO 3 ---*/}
      <div className={Styles.lista}>
          <List>
            {
              usuarios.map(usuario => {
                return (
                  <Item key={usuario.apodo}>
                    <h3>{usuario.apodo}</h3>
                    <List className={Styles.mascotas}>
                      {
                        usuario.mascotas.map(mascota =>{
                          return(
                            <Item key={mascota.nombre + mascota.edad}>
                              <p>{mascota.nombre} {mascota.edad}: {mascota.color}</p>
                            </Item>
                          )
                        })
                      }
                    </List>
                  </Item>
                )
              })
            }
          </List>
      </div>

      {/*--- EJERCICIO 4 ---*/}
      <div>
        <List>
          {
            productos.map(producto => {
              return (
                <PCard key={producto.id} onAddToCart={addProduct} nombre={producto.nombre} precio={producto.precio}>
                  <h3>{producto.nombre}</h3>
                  <p>ID: {producto.id}</p>
                  <p>Precio: {producto.precio}</p>
                  <p>Descripción: {producto.descripcion}</p>
                </PCard>
              )
            })
          }
        </List>
      </div>
    </>
  )
}

export default App
