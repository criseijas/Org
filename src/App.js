import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar} />
      <Equipo equipo="Programación" />
      <Equipo equipo="Front End" />
      <Equipo equipo="Data Science" />
      <Equipo />
      <Equipo />
    </div>
  );
}

export default App;
