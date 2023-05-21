import Styles from './ItemStyle.module.css'

const Item = (props) => {
    return (
        <li className={Styles.item}>
            {props.children}
        </li>
    )
} 

export default Item;