import React from 'react';
import './Login.css';
import Imagem from "../imagens/estilo.png";
import { Link } from 'react-router-dom';


function NovaSenha() {
  return (
<div className="Login">
  <img alt="logo" src={Imagem}/>
    <div class="container" >
      <div class="content">      
        <div id="login">
          <form method="post" action=""> 

          <h1>Crie uma nova senha</h1> 
          <p> 
            <label for="nome">Código de confirmação</label>
            <input id="nome" name="nome" required="required" type="text" placeholder="ex. contato@1estilo.com"/>
          </p>
          <p> 
            <label for="email">Nova senha</label>
            <input id="email" name="email" required="required" type="password" placeholder="ex. senha1estilo" /> 
          </p>
          <p> 
            <label for="email">Repita a nova senha</label>
            <input id="email" name="email" required="required" type="password" placeholder="ex. senha1estilo" /> 
          </p>
           

          <p> 
            <Link to="/Login"><input type="submit" value="Confirmar" /></Link>
          </p>
          
        </form>
      </div> 
    </div>
  </div>  
</div>
  );
}

export default NovaSenha;