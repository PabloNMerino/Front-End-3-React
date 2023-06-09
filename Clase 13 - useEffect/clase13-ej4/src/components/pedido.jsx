import { useEffect } from "react"
import { useState } from "react"

const Pedido = (props) => {

const [isConfirmed, setIsConfirmed] = useState(false)

useEffect(() => {
    console.log('Procesando Pedido!');

    const timeout = setTimeout(() => {
        setIsConfirmed(true)
    }, 2000)

    return () => {
        clearTimeout(timeout)
        console.log('Pedido Cancelado');
    }
}, [])

return(
    <>
        {
            isConfirmed ? <p>Pedido Confirmado!</p> : <p>Procesando pedido</p>
        }
        <button onClick={props.cancelar}>Cancelar pedido</button>
    </>
)

}

export default Pedido