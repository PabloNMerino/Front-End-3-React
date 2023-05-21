import Styles from './ListStyle.module.css'

const List = (props) => {
    return (
    <ul className={Styles.list}>
        {props.children}
    </ul>
    )
}

export default List;

