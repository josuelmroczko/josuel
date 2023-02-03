import './App.css';
import Projetos from './Componentes/projetos.js';


import RedesSociais from './Componentes/RedesSociais';
import Rodape from './Componentes/rodape';

import Topo from './Componentes/Topo';

function App() {
  return (
    <div className="App">
    <Topo/>
   
    <Projetos/>


    <Rodape/>
     <RedesSociais/>

    

    </div>
  );
}

export default App;