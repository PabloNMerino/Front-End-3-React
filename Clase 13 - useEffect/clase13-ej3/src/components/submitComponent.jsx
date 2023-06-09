import { useEffect } from "react";

const SubmitComponent = (props) => {

    useEffect(()=> {
        console.log(`buscando datos en api.github.com/users/${props.name}`);
    }, [props.name])
    return(
        <p>{props.name}</p>
    )
}

export default SubmitComponent;