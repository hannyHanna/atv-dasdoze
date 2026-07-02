import { useState } from "react";
import "./mensagem.css";

function Mensagem() {
  const [texto, setTexto] = useState("Bem-vindo à aplicação!");

  const trocarMensagem = () => {
    setTexto("Você clicou no botão e a mensagem mudou!");
  };

  return (
    <div className="Mensagem">
      <h2>Mensagem</h2>
      <p>{texto}</p>
      <button onClick={trocarMensagem}>Trocar Mensagem</button>
    </div>
  );
}

export default Mensagem;
