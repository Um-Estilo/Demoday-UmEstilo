import React from 'react';
import './Login.css';
import Imagem from "../imagens/estilo.png";
import { Link } from 'react-router-dom';


function Senha() {
  return (
<div className="Login">
  <img alt="logo" src={Imagem}/>
    <div class="container" >
      <div class="content">      
        <div id="login">
          <form method="post" action=""> 

          <h1>Redefenição de Senha  </h1> 
          <p> 
            <label for="nome">Seu Email</label>
            <input id="nome" name="nome" required="required" type="text" placeholder="ex. contato@1estilo.com"/>
          </p>
          <p> 
            <label for="nome">Conforme seu Email</label>
            <input id="nome" name="nome" required="required" type="text" placeholder="ex. contato@1estilo.com"/>
          </p>
           

          <p> 
            <Link to="NovaSenha"><input type="submit" value="Redefenir senha" /></Link>
          </p>
           
          <p class="link">
            <Link style={{color:"#ff5500"}} to="/Login">Voltar para o Login</Link><br></br><br></br>
         </p>
        </form>
      </div> 
    </div>
  </div>  
</div>
  );
}

export default Senha;
