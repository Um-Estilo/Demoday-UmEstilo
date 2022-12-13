import './Sidebar.css';
import Logo from '../imagens/Logo.png';


function Sidebar(){
    return(
        <>
        <div className='sidebar'>
        <div className='sidebar-header-side'>
        <div className="listItem-side">
        
         <div className='pra_voce'>
         <a className='a-side'>Seu <span>Estilo</span></a>
         
         </div>

         
         <h1 className='perf'>Perfis</h1>
         <div className='imgens_geral_side'>
        <img className='img_side' src='https://i.pinimg.com/736x/cc/65/55/cc655519a768971d1e3a669eb1df494a.jpg' />
        <a className='nome_perf'>CRISTIAN CHAVES</a>
        <p className='profissao'>Cabelereiro - SP, Zona norte</p>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://aplicacionesparaselfies.org/wp-content/uploads/2018/04/preciosa-mujer.jpg' />
        <a className='nome_perf'>DIVA MAKES</a>
        <p className='profissao'>Maquiadora - SP, Zona sul</p>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://noticiastu.com/wp-content/uploads/2018/08/Poses-de-Fotos-de-Perfil-14.jpg' />
        <a className='nome_perf'>VITORIA GOMES</a>
        <p className='profissao'>Designer (unhas e sobrancelha) - SP, Zona norte</p>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://www.wefashiontrends.com/wp-content/uploads/2019/03/ideias-de-pose-fotos-de-perfil.jpg' />
        <a className='nome_perf'>MARINA ONOFRE</a>
        <p className='profissao'>Esteticista- SP, Zona norte</p>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <p className='profissao'>Tatuadora - SP, Zona leste</p>
        <img className='img_side' src='https://i.pinimg.com/originals/25/29/fa/2529faa89490a4607fc2063a40f9bdfb.jpg' />
        <a className='nome_perf'>MELISSA LIMA</a>
        <p className='profissao'>Manicure- SP, Zona norte</p>
        <a className='nome_perf_seguir'>SEGUIR</a>
        </div>

        <h1 className='perf'>Para você</h1>


        <a className='topics'> #CABELO AFRO  </a>
         <a className='topics'> #UNHA DE FIBRA  </a>
         <a className='topics'> #360WAVES </a>
         <a className='topics'> #CABELEREIROS </a>
         <a className='topics'> #TATOOS </a>
        

         

         
        </div>

        

        

      </div>
            
        </div>
        </>
    )
}


export default Sidebar;