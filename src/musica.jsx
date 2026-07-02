import './musica.css'

function Cabecalho(){
  return <h1>Musica favorita  </h1>
 }
function Titulo(){
  return (
    <div className="titulo">
        <img src="./images/transferir.png"/>
        <h1> nome: Oração </h1>
    </div>
 );}

function Mensagem(){
  return<p> cantores: a banda mais bonita da cidade </p>
 }
 function BotaoEntrar(){
  return <button> ouvir
   </button>
 }
 function Musica(){
  return(
    <div className="caixa">
     <Cabecalho/>
     <Titulo/>
     <Mensagem/>
     <BotaoEntrar/>
  </div>
  );
 }

export default Musica;


