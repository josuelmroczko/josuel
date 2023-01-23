import './RedesSociais.css'


import linkedin from './LinkedIn.png'
import git from './git.png'
import whatsapp from './whatsapp.png'

function RedesSociais (){
    return(
        <div className='social'>
            <ul>
            <li> <a href="https://www.linkedin.com/in/josuel-mroczko-677b36183/" target="blank">   <img src={linkedin}alt="linkedin" /> </a>  </li>
                <li> <a href="https://github.com/josuelmroczko" target="blank"> <img src={git} alt="git"  />  </a></li>
                <li> <a href="https://api.whatsapp.com/send?phone=5511993093681&text=Ol%C3%A1%20irei%20entrar%20em%20contato%20em%20breve.%20" target="blank"> <img src={whatsapp} alt="whatsapp" />  </a></li>

            </ul>



        </div>

    )
}

export default RedesSociais
