import calculadoraimc from './calculadoraImc.jpg'
import imgaleatoria from './trabalhando.jpeg'
import './projetos.css'

function Projetos () {
    return(
       
        <div className='caixa' >
       
       <ul className='containers'>
s

        <li >
        <a href='https://introducao-javascript.vercel.app/' target="black" > <img src={calculadoraimc} ></img>  <p>Calculadora IMC</p></a>
        </li>



        <li >
        <img src={imgaleatoria} ></img><p>Logo teremos mais projetos</p>
        </li>



        <li >
        <img src={imgaleatoria} ></img><p>Logo teremos mais projetos</p>
        </li>

        <li >
        <img src={imgaleatoria} ></img><p>Logo teremos mais projetos</p>
        </li>
        

        </ul> 
     
</div>
        
        

    )
}


export default Projetos