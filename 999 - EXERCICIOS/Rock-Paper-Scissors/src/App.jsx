import React, { Fragment } from 'react';
import Pontuacion from './components/original/pontuacion/Score';
import Triangle from './components/original/triangle/Triangle';
import Pentagon from './components/bonus/Pentagon/Pentagon';

function App() {
  return (
    <Fragment>
      <Pontuacion />
      <Pentagon />
    </Fragment>
  );
}

export default App;
