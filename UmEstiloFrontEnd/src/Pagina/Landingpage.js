import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { SiLinktree } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Video from '../imagens/video.mp4';
import Logo from '../imagens/Logo.png';
import Celular from '../imagens/Celular.png';
import Empre from '../imagens/Empre.png';
import Inovalem from '../imagens/LogoIno.png';
import Visumei from '../imagens/LogoVisu.png';
import Cliente from '../imagens/Cliente.png'
import Tc from '../imagens/LogoTc.png';
import './Landingpage.css'

export function Pagina() {
    return (

        <div>
                    <div className="Navigation">
                        <img className="Logo" src={Logo} />
                        <a className="Nome" href="#"><span>Um</span>Estilo</a>
                    <div>
                    <Link to="/Login"> <a href="#" className="btn2">Cadastro</a></Link>
                </div>
                  </div>
                <div className='land_video'>

                    <img class="celular" src={Celular} alt="" />
                    <video className="Video" src={Video} alt="" loop autoPlay muted />
                </div>

                <div className="txtUm">
                    <h1 className="tituUm">Quem é a Um Estilo?</h1>
                    <p>O empreendedorismo no Brasil vem crescendo e gerando empregos e novas fontes de renda aos brasileiros,
entretanto,na mesma proporção que se criam novos empreendimentos.<br></br><br></br>


São desfeitos alguns empreendimentos por falta de clientes, falta de visibilidade no mercado.<br></br><br></br>

Nós da Um Estilo queremos que os empreendedores consigam manter o seu negócio no mercado.<br></br><br></br>

Queremos que você, empreendedor, compartilhe seu sonho - seu negócio - com estilo.</p>
                    <img src={Cliente}></img>
                    <h1 className="tituDois">Como funcionamos</h1>
                    <p>O empreendedorismo no Brasil vem crescendo e gerando empregos e novas fontes de renda aos brasileiros,
entretanto,na mesma proporção que se criam novos empreendimentos.<br></br><br></br>


são desfeitos alguns empreendimentos por falta de clientes, falta de visibilidade no mercado.<br></br><br></br>

Nós da Um Estilo queremos que os empreendedores consigam manter o seu negócio no mercado.<br></br><br></br>

Queremos que você, empreendedor, compartilhe seu sonho - seu negócio - com estilo.</p>
                    <img src={Empre}></img>

                    </div>


            <section className="BlocoParc">
                <div className="Parcerias">
                    <h1>Parcerias</h1>
                </div>
                <div className="Logomarcas">
                    <div className="Inovalem">
                        <img src={Inovalem} />
                        <p>Inovalem</p>
                    </div>
                    <div className="Visumei">
                        <img src={Visumei} />
                        <p>Visumei</p>
                    </div>
                    <div className="Tc">
                        <img src={Tc} alt="tc" />
                        <p>Fundação T&C</p>
                    </div>
                </div>
            </section>
            <section className="Footer">
                <div className="LogoFooter">
                    <img className="img" src={Logo} alt="" />
                    <h1 class="nome_footer"><span>Um</span>Estilo</h1>
                    <h3>Oportunidade, visão e estilo</h3>
                    <div className='redes'>
                        <ul>
                            <a href="https://linktr.ee/umestiloproa"><SiLinktree className="icon" /></a>
                            <a href="https://github.com/Um-Estilo"><AiFillGithub className="icon" /></a>
                            <a href="https://www.instagram.com/umestilo_proa/"><AiFillInstagram className="icon" /></a>
                        </ul>
                    </div>
                </div>

                <div className='opcAtendi'>
                    <h1>Entre em contato</h1>
                    <p>Para saber mais e falar com a UmEstilo</p>
                    <p>Acesse as redes ao lado </p>

                </div>


            </section>
            </div>
    )
}

export default Pagina;