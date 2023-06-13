import Style from './bookStyle.module.css'

const Books = (props) => {

    return(
        <select name="valores" id="valores" onChange={(e) => props.getPlanet(e.target.value)}  className={Style.seleccion}>
            <option value="">Choose an option</option>
            <option value={"Roshar"}>Roshar</option>
            <option value={"Skadrial"}>Skadrial</option>
            <option value={"Nalthis"}>Nalthis</option>
            <option value={"Threnody"}>Threnody</option>
        </select>
    )
}

export default Books