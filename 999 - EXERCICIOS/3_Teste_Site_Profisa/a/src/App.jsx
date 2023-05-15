import React, { Fragment } from 'react'
import Header from './components/1-Header/Header.jsx'
import Apresentation from './components/2-Apresentation/Apresentation.jsx'
import CardsFlutuante from './components/3-CardFlutuante/CardsFlutuante.jsx'


function App() {

  return (
    <Fragment>
      <Header />
      <Apresentation />
      <CardsFlutuante />
    </Fragment>
  )
}

export default App
