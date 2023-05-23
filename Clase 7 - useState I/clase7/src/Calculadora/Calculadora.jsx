import { useState } from 'react'
import Style from './CalculadoraStyle.module.css'

const Calculadora = (props) => {
    const [valor, setValor] = useState(0);

    const sumar = () => {
        setValor(valor + props.amount)
    }

    const restar = () => {
        setValor(valor - props.amount)
    }

    const resetear = () => {
        setValor(0)
    }

    const verResultado = () => {
        console.log(`Valor actual:  ${valor}`);
        props.onEqual(valor)
    }

    return (
        <div className={Style.divCalculadora}>
            <h1>{valor}</h1>
            <button onClick={sumar} className={Style.button}>+</button>
            <button onClick={restar} className={Style.button}>-</button>
            <button onClick={resetear} className={Style.button}>reset</button>
            <button onClick={verResultado} className={Style.button}>=</button>
        </div>
    )
}

export default Calculadora;