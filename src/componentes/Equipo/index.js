import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {colorSecundario, colorPrimario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props

    const obj = { backgroundColor: hexToRgba(colorPrimario, 0.6)}

    return <>
    { colaboradores.length > 0 && <section className="equipo" style={obj}>
        <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
                actualizarColor(e.target.value, id)
            }}
        />
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            
            {colaboradores.map((colaborador, index) => {
                return <Colaborador 
                datos={colaborador} 
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador} 
                />
            })}
            
        </div>
    </section>}
    </>
}

export default Equipo