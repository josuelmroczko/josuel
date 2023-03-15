import './App.css';
import CarouselB from './Componentes/carrosselfooter/carrossel';
import Projetos from './Componentes/projetos.js';
import RedesSociais from './Componentes/RedesSociais';
import Rodape from './Componentes/rodape';
import Sobre from './Componentes/sobre/sobre';
import Topo from './Componentes/Topo';

function App() {
  return (
    <div className="App">
    <Topo/>
   
    <Projetos/>
    <Sobre/>
    
    
    <CarouselB/>
        <Rodape/>
    <RedesSociais/>

    

    </div>
  );
}

export default App;