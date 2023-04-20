import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    console.log(props)
    //Estado - hooks
    //useState() --> hay que importarlo
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState("Harland")

    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () => {
    //    console.log("mostrar/ocultar form", mostrar)
    //    actualizarMostrar(!mostrar)
    // }
    
    return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
</section>
}

export default MiOrg