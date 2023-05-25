import Styles from './ListaDeCuentasStyle.module.css'

const ListaDeCuentas = (props) => {

    return (
        <div className={Styles.cajaGrande}>
            {
                props.cuentas.map(cuenta => {
                    return (
                        <div key={cuenta.id} className={Styles.box}>
                            <h4>{cuenta.nombre}</h4>
                            <p>{cuenta.edad}</p>
                            <p>{cuenta.email}</p>
                            {
                                (props.listaTotal === `todas las cuentas`) ? <button onClick={() => props.onClick(cuenta)}>Add</button> : <button onClick={() => props.onClick(cuenta)}>Delete</button> 
                            }
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListaDeCuentas;