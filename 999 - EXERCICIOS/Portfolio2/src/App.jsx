import React, {Fragment} from 'react'
import Header from './components/header/Header.jsx'
import SobreMim from './components/main/1_sobreMim/SobreMim.jsx'
import Habilidades from './components/main/2_habilidades/Habilidades.jsx'
import VanillaTilt from './Vanilla/vanilla-tilt.js'

function App() {
  return (
    <Fragment>
      <Header />
      <main id="main-home">
        <SobreMim />
        <Habilidades />
      </main>

      <script>
        {VanillaTilt.init(document.querySelectorAll(".cards"), {
          max: 25,
          speed: 400,
          glare: true
        })}
      </script>
    </Fragment>
  )
}

export default App
