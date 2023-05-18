import styles from "./ItemStyle.module.css"

const Item = (props) => {
    return (
        <li className={styles.listado}>
            {props.children}
        </li>
    )
}

export default Item;