import calculadoraimc from '../imagens/calculadoraImc.jpg'
import imgaleatoria from '../imagens/trabalhando.jpeg'
import organo from '../imagens/organo.png'
import alurabook from '../imagens/alurabook.png'
import ecomerce from '../imagens/ecomerce.png'

import './projetos.css'


function Projetos() {
    return (

        <div className='caixa' >



            <div className='projetos__titulo'> <h2>Projetos</h2></div>
            <ul className='containers'>



                <li >
                   <a href="https://catus-11.vercel.app/" target="blanck"> <img src={ecomerce} ></img><p>ecomerce</p></a>
                </li>

                <li >
                    <a href='https://introducao-javascript.vercel.app/' target="black" > <img src={calculadoraimc} ></img>  <p>Calculadora IMC</p></a>
                </li>



                <li >
                    <a href='https://organo-murex-five.vercel.app/' target="black" >   <img src={organo} ></img><p>Pessoas e Times</p></a>
                </li>



                <li >
                    <a href='https://alurabook-opal-delta.vercel.app/' target="black"> <img src={alurabook} ></img><p>Alura Book</p></a>
                </li>
            

                <li >
                    <img src={imgaleatoria} ></img><p>Logo teremos mais projetos</p>
                </li>


            </ul>

        </div>



    )
}


export default Projetos