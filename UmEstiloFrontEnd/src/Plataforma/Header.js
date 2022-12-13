import {CgProfile} from 'react-icons/cg';
import Logo from '../imagens/Logo.png';
import Ecoin from '../imagens/ecoin.png';
import './Header.css'

function Header (){
    return (
        <>

        <div className='head'>
            <div className='UmEstilo'>
            <img className="Logo" src={Logo} /><a className="Nome"><span>Um</span>Estilo</a>
            </div>
           <h6> 
            <input className='Pesquisa_Plataforma' type="text" placeholder=""/>
            </h6>       
            
            <div className='fundo_moeda'>
          <img className='prof' src={Ecoin} style={{width:"50px", height:"47px"}} />
          <a className='valor'>150</a> 
          </div>

            <div className='Perfil'>
            <CgProfile size={35}/>
          </div>
        </div>
       
        </>
    )
}

export default Header;