import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login.js';
import Cadastro from './Login/Cadastro.js';
import Preferencias from './Login/Preferencias.js';
import Senha from './Login/Senha.js';
import NovaSenha from './Login/NovaSenha.js';
import Pagina from './Pagina/Landingpage.js';
import Plataforma from "./Plataforma/Plataforma.js";
import './App.css'

function App() {
  return (

    <div>
    <BrowserRouter>
  
      <Routes>
        <Route path="Cadastro" element={<Cadastro/>} />
        <Route path="Pagina" element={<Pagina/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Preferencias" element={<Preferencias/>} />
        <Route path="Senha" element={<Senha/>} />
        <Route path="Senha/NovaSenha" element={<NovaSenha/>} />
        <Route path="Plataforma" element={<Plataforma/>} />

      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

