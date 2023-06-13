import Style from './productStyle.module.css'

const Products = (props) => {
return(
    <div className={Style.box}>
        {props.children}
    </div>
)
}

export default Products