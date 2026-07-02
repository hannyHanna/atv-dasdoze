import { useState } from "react";
import "./App.css";
import Home from "./Home";
import "./musica.css";
import "./mensagem.css";
import "./jogo.css";
import  "./links.css";
import  "./turma.css";
import  "./filme.css";
import  "./eu.css";
import "./boav.css";
import "./recado.css";

import Musica from './musica.jsx';
import Perfil from './Perfil.jsx';
import Jogo from './jogo.jsx';
import Eu from './eu.jsx';
import Links from './links.jsx';
import Evento from './evento.jsx';
import Filme from './filme.jsx';
import Cartao from './Cartao.jsx';
import Mensagem from './mensagem.jsx';
import Turma from './turma.jsx';
import Boav from './boav.jsx';
import Recado from './recado.jsx';
function App() {

  const [pagina, setPagina] = useState("home"); 

  return (
    <div>
      <nav className="menu">
        <button onClick={() => setPagina("home")}>Home</button>
        <button onClick={() => setPagina("cartao")}>Cartão</button>
        <button onClick={() => setPagina("perfil")}>Perfil</button>
        <button onClick={() => setPagina("evento")}>Evento</button>
        <button onClick={() => setPagina("mensagem")}>Mensagem</button>
        <button onClick={() => setPagina("jogo")}>Jogo</button>
        <button onClick={() => setPagina("links")}>Links</button>
        <button onClick={() => setPagina("turma")}>Turma</button>
        <button onClick={() => setPagina("filme")}>Filme</button>
        <button onClick={() => setPagina("eu")}>Apresentação</button>
        <button onClick={() => setPagina("boav")}>Boas vindas</button>
        <button onClick={() => setPagina("musica")}>Música</button>
           <button onClick={() => setPagina("recado")}>recado</button>
        
      </nav>

       {pagina === "home" && <Home />}
      <div className="home">
    <div className="home-card">
    <h1>Bem-vindo!</h1>
    <p>Escolha uma atividade no menu.</p>
  </div>
</div>
      

     {pagina === "cartao" && (
  <div>
    <Cartao/>
  </div>
)}


      {pagina === "perfil" && (
        <div>
         <Perfil/>
        </div>
      )}

      {pagina === "musica" && (
        <div>
          <Musica/>
        </div>
      )}{pagina === "mensagem" && (
  <div>
 <Mensagem/>
  </div>
)}

{pagina === "jogo" && (
  <div>
  <Jogo/>
  </div>
)}

{pagina === "links" && (
  <div>
    <Links/>
  </div>
)}

{pagina === "turma" && (
  <div>
    <Turma/>
  </div>
)}

{pagina === "filme" && (
  <div>
    <Filme/>
  </div>
)}

{pagina === "eu" && (
  <div>
   <Eu/>
  </div>
)}

{pagina === "boav" && (
  <div>
    <h1><Boav/></h1>
  </div>
)}
{pagina === "recado" && (
  <div>
    <h1><Recado/></h1>
  </div>
)}

{pagina === "evento" && (
  <div>
<Evento/>
  </div>
)}
    </div>
  );
}

export default App;