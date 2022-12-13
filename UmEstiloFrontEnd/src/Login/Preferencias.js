import React from 'react';
import Pin from './PreferenciasPin.js';
import Imagem from "../imagens/estilo.png";
import "./Preferencias.css"
import { Link } from 'react-router-dom';

function Preferencias(){
    return(
        <div>
            <img alt="logo" src={Imagem}/>
     
      <h1>Escolha o seu próprio ESTILO <Link to={"/Plataforma"}><button>Avançar</button></Link></h1>       


            <div style={styles.pin_container}>

            <Pin size='small'/>
         
            <Pin size='small3'/>
            <Pin size='large3'/>
            <Pin size='small4'/>
            <Pin size='large4'/>
            <Pin size='medium'/>
            <Pin size='large2'/>
            <Pin size='small5'/>
            <Pin size='medium3'/>
            <Pin size='medium4'/>
            <Pin size='large7'/>
            <Pin size='medium2'/>
            <Pin size='small2'/>
            <Pin size='small1'/>
            <Pin size='small6'/>
            <Pin size='medium1'/>
            <Pin size='medium5'/>
            <Pin size='medium6'/>
            <Pin size='large5'/>
            <Pin size='medium7'/>
            <Pin size='large6'/>
            <Pin size='medium8'/>
            <Pin size='medium9'/>
      

            </div>
    </div>
    )
}

const styles = {
    pin_container: {
    margin: 0,
    padding: 0,
    width: '70vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
    backgroundColor: 'rgba(191, 191, 191, 0.2)',
    borderRadius: '18px',
    }
   }

export default Preferencias;
