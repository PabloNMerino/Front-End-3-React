function Card(props) {
    return (
        <div className="contenedor-card">
            {props.title ? <div className="titulo-card">{props.title}</div> : undefined}
            <div className="hijo-card">{props.children}</div>
            {props.footer ? <div className="footer-card">{props.footer}</div> : undefined}
        </div>
    )
}

export default Card;