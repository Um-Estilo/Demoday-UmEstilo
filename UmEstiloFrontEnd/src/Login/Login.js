import React from 'react';
import './Login.css';
import Imagem from "../imagens/estilo.png";
import { Link } from 'react-router-dom';


function Login() {
  return (
<div className="Login">
  <img alt="logo" src={Imagem}/>
    <div class="container" >
      <div class="content">      
        <div id="login">
          <form method="post" action=""> 

          <h1>Login</h1> 
          <p> 
            <label for="nome">Seu Email</label>
            <input id="nome" name="nome" required="required" type="text" placeholder="ex. contato@1estilo.com"/>
          </p>
           
          <p> 
            <label for="email">Sua senha</label>
            <input id="email" name="email" required="required" type="password" placeholder="ex. senha1estilo" /> 
          </p>
           
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label for="manterlogado">Manter-me logado</label>
          </p>
           
          <p> 
             <Link to="/Preferencias"><input type="submit" value="Logar" /></Link>
          </p>
           
          <p class="link">
            Ainda não tem conta? <Link style={{color:"#ff5500"}} to="/Cadastro">Cadastre-se</Link><br></br><br></br>
            <Link style={{color:"#ff5500"}} to="/Senha">Esqueci minha senha</Link><br></br>          </p>
        </form>
      </div> 
    </div>
  </div>  
</div>
  );
}

export default Login;
