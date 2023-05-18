import styles from './ListaStyle.module.css'

const Lista = (props) => {
    return (
        <ul className={styles.lista}>
            {props.children}
        </ul>
    )
}

export default Lista;