import pclofi from '../imagens/pclofi.png'
import './sobre.css'

function Sobre (){
    return(
    <div className='containerSobre'>
    
        <h2 className='sobreh2'>Sobre</h2>
        
       
        <p className='texto_sobre'>A busca constante pelo aprimoramento é essencial para o sucesso em qualquer área. Dedico-me ao aperfeiçoamento das minhas habilidades para desenvolver soluções inovadoras e eficientes, mantendo-me atualizado com as últimas tendências e tecnologias. Acredito que, ao manter essa postura de constante busca pelo aprimoramento, não apenas estamos melhorando as nossas habilidades, mas também contribuindo para o avanço da nossa sociedade como um todo. Pois, como disse Aristóteles, "a excelência não é um ato, mas um hábito".</p>
    <img className='pclofi' src={pclofi}></img>

    </div>
    )
}

export default Sobre