import React, {Fragment} from 'react'
import Header from './components/header/Header.jsx'
import SobreMim from './components/main/1_sobreMim/SobreMim.jsx'
import Habilidades from './components/main/2_habilidades/Habilidades.jsx'
import { VanillaTilt } from './Vanilla/vanilla-tilt.js'




function App() {
  return (
    <Fragment>
      <Header />
      <main id="main-home">
        <SobreMim />
        <Habilidades />
      </main>
    </Fragment>
  )
}


VanillaTilt.init(document.querySelectorAll(".item-projetos"), {
  max: 25,
  speed: 400,
      glare: true,
      "max-glare": 1,
});
  VanillaTilt.init(document.querySelectorAll(".cards"), {
  max: 25,
  speed: 400,
      glare: true
});
  VanillaTilt.init(document.querySelectorAll(".img-flutuante"), {
  max: 50,
  speed: 5000,
});

export default App
