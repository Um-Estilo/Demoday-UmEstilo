import './Videos.css'
import Video1 from '../videos/1.mp4'
import Video2 from '../videos/2.mp4'
import Video3 from '../videos/3.mp4'
import Video4 from '../videos/4.mp4'
import Video5 from '../videos/5.mp4'
import Video6 from '../videos/6.mp4'
import Video7 from '../videos/7.mp4'
import {TbBusinessplan} from 'react-icons/tb';
import {IoIosAdd} from 'react-icons/io';
import {RiShareForwardFill} from 'react-icons/ri';



function Videos (){
    return(

        <>

            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor' src="https://image.freepik.com/fotos-gratis/barbeiro-bonito-com-barba-espessa-segurando-seu-acessorio-de-barbearia-demonstrando-a-lamina-afiada-de-uma-navalha_273609-6487.jpg" />
            <p className="Nome_empreendedor"> VITBARBER - Cabelereiro - SP</p> 
            </div>
            <video className='video' src={Video1}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>

            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor' src="https://image.freepik.com/fotos-gratis/barbeiro-bonito-com-barba-espessa-segurando-seu-acessorio-de-barbearia-demonstrando-a-lamina-afiada-de-uma-navalha_273609-6487.jpg" />
            <p className="Nome_empreendedor"> VITBARBER - Cabelereiro - SP</p> 
            </div>
            <video className='video' src={Video2}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>

            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor' src='https://noticiastu.com/wp-content/uploads/2018/08/Poses-de-Fotos-de-Perfil-14.jpg' />
            <p className="Nome_empreendedor"> VOTORIA GOMES- Designer - SP</p> 
            </div>
            <video className='video' src={Video4}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>

            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor' src="https://image.freepik.com/fotos-gratis/barbeiro-bonito-com-barba-espessa-segurando-seu-acessorio-de-barbearia-demonstrando-a-lamina-afiada-de-uma-navalha_273609-6487.jpg" />
            <p className="Nome_empreendedor"> VITBARBER - Cabelereiro - SP</p> 
            </div>
            <video className='video' src={Video3}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>



            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor'  src='https://www.wefashiontrends.com/wp-content/uploads/2019/03/ideias-de-pose-fotos-de-perfil.jpg' />
            <p className="Nome_empreendedor"> MARINA ONOFRE - Tatuadora - SP</p> 
            </div>
            <video className='video' src={Video5}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>

            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor'  src='https://www.wefashiontrends.com/wp-content/uploads/2019/03/ideias-de-pose-fotos-de-perfil.jpg' />
            <p className="Nome_empreendedor"> MARINA ONOFRE - Tatuadora - SP</p> 
            </div>
            <video className='video' src={Video7}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>



            <div className='Videos'>
                <div>
                
            <img className='Foto_empreendedor' src='https://i.pinimg.com/originals/25/29/fa/2529faa89490a4607fc2063a40f9bdfb.jpg' />
            <p className="Nome_empreendedor"> MELISSA LIMA - Manicure - SP</p> 
            </div>
            <video className='video' src={Video6}  controls autoplay  loop />
            <TbBusinessplan className='icons'/>
            <IoIosAdd className='icons'/>
            <RiShareForwardFill className='icons'/>
            </div>

 


        </>

    )
}

export default Videos;