import "./jogo.css";

function Jogo() {
  return (
    <div className="jogo">
      <h2 className="jogo-nome">Minecraft</h2>
      <p className="jogo-categoria">Categoria: Aventura e Construção</p>
      <p className="jogo-descricao">
        Explore mundos infinitos e construa tudo o que imaginar, sozinho ou com amigos.
      </p>
      <button className="jogo-button">Jogar</button>
    </div>
  );
}

export default Jogo;
