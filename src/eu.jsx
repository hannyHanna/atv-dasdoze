import "./eu.css";

function Eu() {
  return (
    <div className="sobre-container">
      <header className="sobre-header">
        <h1>Sobre Mim</h1>
      </header>

      <div className="sobre-card">
        <h2 className="sobre-nome">Nome: Hanna</h2>
        <p className="sobre-idade">Idade: 17 anos</p>
        <p className="sobre-hobby">Hobby: Ler livros do percy e jogar Minecraft</p>
        <button className="sobre-button">Saiba mais</button>
      </div>
    </div>
  );
}

export default Eu;
