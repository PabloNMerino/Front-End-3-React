import { useState } from 'react';
import Styles from './formStyle.module.css'

const Form = (props) => {

    const [plato, setPlato] = useState('')
    const [mensajeError, setMensajeError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        if(plato.trim()==='') {
            setMensajeError('Complete el campo "plato"')
        }
        else {
            props.onSubmit(plato);
            setPlato('');
            setMensajeError('');
        }
    }
    
    return(
        <div className={Styles.divForm}>
            <h3>Crear Pedido</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="plato" className={Styles.label}>Plato</label>
                    <input  className={Styles.input} type="text" value={plato} onChange={(e) => setPlato(e.target.value)}/>
                </div>
                <button className={Styles.boton} type='submit'>Pedir!</button>
            </form>
            {!plato ? <p className={Styles.error}>{mensajeError}</p> : undefined}
        </div>
    )
}

export default Form;