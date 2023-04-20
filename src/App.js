import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';

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
    </div>
  );
}

export default App;
