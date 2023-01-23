import './Topo.css'
import imagem from './imagem.gif'
import Competencias from '../modal'


function Topo () {
    return(
        <div className='container'>
        

         <img src= {imagem} className='imagem'></img>

          <div className='apresentacao'>
            
        <h1 className='apresentacao__texto animation'>  Olá. Eu sou o Josuel Mroczko. </h1>
        </div>
        <p className='textotopo'>Sou um Desenvolvedor Front End. Ao longo da minha jornada cursando engenharia de software venho sempre em busca de aprimorar cada vez mais meu conhecimento para a produção de um código limpo, modular e semântico.  </p>
        <Competencias/>
   

        
        
        </div>
    )
}


export default Topo