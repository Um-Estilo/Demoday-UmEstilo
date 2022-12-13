import './Login';
import Imagem from "../imagens/estilo.png";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';



function Cadastro(){
  const [checked, setChecked] = useState(false);
  function changeCheckbox () {
    setChecked(!checked);
  }
    return(

<div className="Cadastro">
    <img alt="logo" src={Imagem}/>
        <div class="content">
            <div class="container" >
                <div id="cadastro">
        
            <form method="post" action=""> 
          <h1>Cadastro</h1> 
           
          <p> 
            <label for="nome">Seu nome completo</label>
            <input id="nome" name="nome" required="required" type="text" placeholder="ex. nome" />
          </p>
           
          <p> 
            <label for="email">Seu e-mail</label>
            <input id="email" name="email" required="required" type="email" placeholder="ex. contato@1estilo.com"/> 
          </p>
           
          <p> 
            <label for="senha">Crie um senha</label>
            <input id="senha" name="senha" required="required" type="password" placeholder="ex. 1estilo@senha"/>
          </p>
           
          <p> 
            <label for="senha">Confirme a senha</label>
            <input id="senha" name="senha" required="required" type="password" placeholder="ex. 1estilo@senha"/>
          </p>

            <p>
            <label class="Idade" for="idade">Data de Nascimento</label>
            <input for="idade" required="required" type="date"></input>
          </p>

            <p>
            <label class="CPF"for="CPF">Digite seu CPF</label>
            <input for="CPF" required="required" type="number"></input>
          </p>

         <p class="empreender">
            <input type="checkbox" onChange={() => changeCheckbox()} name="empreender"  value="" /> 
            
            <label id="myCheck"for="CNPJ">Quero Empreender</label>
            {
              checked ? <input id="CNPJ" for="CNPJ" required="required" type="number" placeholder="Digite seu CNPJ"></input> : undefined
            }
          </p>

          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
           
          <p class="link">  
            Já tem conta? <Link class="ff5500" to="/Login">Ir para Login</Link>
            </p>
            </form>

             </div>
        </div> 
    </div>
    
</div>
    )
}




export default Cadastro; 