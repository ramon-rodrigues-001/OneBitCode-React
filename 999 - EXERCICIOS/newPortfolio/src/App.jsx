// IMPORTANDO LAYOUT
import { useState } from "react";
import "./style/overall.scss"
import Header from "./layout/1-header/header";
import SobreMim from "./layout/2-sobreMim/sobre-mim";

function App() {
  const [tema, setTema] = useState('Dark')

  const mudarTema = () => {
    setTema(tema === 'Light' ? 'Dark' : 'Light')
    return tema
  } 

  return (
    <div className="container_overall" id={tema === 'Light' ? 'Ligth' : 'Dark'}>
      <Header tema={tema} mudarTema={mudarTema}/>

      <main className="container_main">
        <SobreMim tema={tema}/>
      </main>
    </div>
  )
}

export default App
