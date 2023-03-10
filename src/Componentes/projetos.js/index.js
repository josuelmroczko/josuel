import calculadoraimc from './calculadoraImc.jpg'
import imgaleatoria from './trabalhando.jpeg'
import organo from './organo.png'
import './projetos.css'


function Projetos () {
    return(
       
        <div className='caixa' >

       <div className='projetos__titulo'> <h2>Projetos</h2></div>
       <ul className='containers'>





        <li >
        <a href='https://introducao-javascript.vercel.app/' target="black" > <img src={calculadoraimc} ></img>  <p>Calculadora IMC</p></a>
        </li>



        <li >
        <a href='https://organo-murex-five.vercel.app/' target="black" >   <img src={organo} ></img><p>Logo teremos mais projetos</p></a>
        </li>



        <li >
        <img src={imgaleatoria} ></img><p>Logo teremos mais projetos</p>
        </li>

        <li >
        <img src={imgaleatoria} ></img><p>Logo teremos mais projetos</p>
        </li>
        

        </ul> 
           <div>
            
           </div>
</div>
        
        

    )
}


export default Projetos