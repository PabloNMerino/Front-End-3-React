import { useEffect } from "react";

const ActiveComponent = () => {

    useEffect(() => {
        console.log('Activo');

        return () => {
            console.log('Desactivo');
        }
    }, [])

    return(
        <p>Activo!</p>
    )
}

export default ActiveComponent;
