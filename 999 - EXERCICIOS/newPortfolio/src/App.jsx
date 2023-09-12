// IMPORTANDO LAYOUT
import { useEffect, useState } from "react";

// Importe do Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
// Importe do JavaScript do Bootstrap 
import 'bootstrap/dist/js/bootstrap.min.js';
import "./style/overall.scss"

// Imports dos layOuts
import Header from "./layout/1-header/header";
import SobreMim from "./layout/2-sobreMim/sobre-mim";
import Barra from "./layout/1.5.barra-de-scroll/barra"
import Habilidades from "./layout/3-habilidades/habilidades";
import Projeto from "./layout/4-projetos/projetos";
import Convite from "./layout/5-convite-para-conversar/convite";
import Contatos from "./layout/6-contatos/contatos";

function App() {
  const [tema, setTema] = useState('Dark')
  const [olhos, setOlhos] = useState('false')
  const [intervalTime, setIntervalTime] = useState(2000);

  // EXIBIR OLHOS
  const toggleOlhos = () => {
    setOlhos((prevOlhos) => !prevOlhos);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleOlhos, intervalTime);

    return () => clearInterval(intervalId);
  }, [intervalTime]);

  useEffect(() => {
    if (olhos) {
      setIntervalTime(2000)
    } else {
      setIntervalTime(4000)
    }
  }, [olhos]);


  // Mudar Tema CLARO / ESCURO
  const mudarTema = () => {
    setTema(tema === 'Light' ? 'Dark' : 'Light')
    return tema
  } 

  return (
    <div className="container_overall" id={tema === 'Light' ? 'Ligth' : 'Dark'}>
      <Header tema={tema} mudarTema={mudarTema}/>

      <main className="container_main">
        <SobreMim tema={tema} olhos={olhos}/>
        <Barra tema={tema}/>
        < Habilidades tema={tema}/>
        < Projeto tema={tema}/>
        < Convite tema={tema} />
        < Contatos id="ancora-contatos" />
      </main>
    </div>
  )
}

export default App
