import Styles from './platoStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Plato = (props) => {

    return(
        <div className={Styles.boxPlato}>
            <div className={Styles.imagenPlato}></div>
            <p className={Styles.nombrePlato}>{props.nombre}</p>
            <button className={Styles.eliminar} onClick={() => props.onClick(props.id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}

export default Plato;