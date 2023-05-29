import { useState } from "react";
import Styles from './formStyle.module.css'

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [mensajeError, setMensajeError] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === '') {
            setMensajeError('Ingrese nombre')
        } else if (numero <= 0 || isNaN(numero)) {
            setMensajeError('Ingrese Numero')
        } else {
            props.onSubmit({ nombre, numero })
            setNombre('')
            setNumero('')
            setMensajeError('')
        }
    }

    return (

        <>
        <form onSubmit={handleSubmit} className={Styles.form}>
            <div>
                <label htmlFor="nombre"> Nombre </label>
                <input
                    type="text"
                    value={nombre}
                    name="nombre"
                    id="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="numeroFavorito"> Numero Favorito </label>
                <input
                    className={Styles.numeroInput}
                    type="number"
                    value={numero}
                    name="numeroFavorito"
                    id="numeroFavorito"
                    onChange={(e) => setNumero(e.target.value)}
                />
            </div>
            <button className={Styles.boton} type="submit">OK</button>
        </form>
        {mensajeError && <p className={Styles.boxError}>{mensajeError}</p>}
    </>
    );
};

export default Formulario;
