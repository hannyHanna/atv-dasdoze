import './App.css'


function Titulo() {
  return <h2>Hanna Gabrielly Nogueira Rodrigues </h2>
}


function Mensagem() {
  return <h1>  Eu faço parte do curso de Desenvolvimento de Sistemas,<br></br>
    Eu nasci em Juina MT e atualmente moro em <b>Guaramirim</b>
  </h1>
}
 function BotaoEntrar(){
  return <button>seguir
   </button>}



function Perfil() {
  return (
    <div className="caixa">
      <Titulo/>
      <Mensagem/>
      <BotaoEntrar/>

      </div>
     )
}


export default Perfil;
