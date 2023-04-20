import React, {Fragment} from 'react'
import Header from './components/header/Header.jsx'
import SobreMim from './components/main/sobreMim/SobreMim.jsx'

function App() {
  return (
    <Fragment>
      <Header />
      <main id="main-home">
        <SobreMim />
        
      </main>
    </Fragment>
  )
}

export default App
