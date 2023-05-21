const ProductCard = (props) => {

const handleProduct = () => {
    props.onAddToCart({nombre: props.nombre, precio: props.precio})

}

    return (
        <li>
            {props.children}
            <button onClick={handleProduct}>Agregar Producto</button>
        </li>
    )
} 

export default ProductCard;