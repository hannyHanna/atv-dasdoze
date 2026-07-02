import "./links.css";

function Links() {
  return (
    <div className="caixa">
      <div className="Links">
        <h1>Links Úteis</h1>
      </div>

      <h2>Links</h2>
      <p>Aqui estão alguns links que podem te ajudar a aprender mais:</p>

      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <button>React Oficial</button>
      </a>

      <a href="https://developer.mozilla.org" target="_blank" rel="noreferrer">
        <button>MDN Docs</button>
      </a>

      <a href="https://github.com" target="_blank" rel="noreferrer">
        <button>GitHub</button>
      </a>
    </div>
  );
}

export default Links;
