import React, {fragment} from 'react'

import Buttons from "./btn/BtnCommun";
import Buttons2 from "./btn/BtnQuimera";
import BtnInFormaTionParaCima from './btn/BtnInformationParaCima';

function App() {
  return (
      <fragment>
        <h1>Eventos no React</h1>
        <hr />
        <Buttons
          alert="Ola este é o primeiro button"
          innerText="BTN_1"
        />
        <Buttons
          alert="Ola este é o Segundo button"
          innerText="BTN_2"
        />
        <hr />
        <Buttons2 />
        <hr />
        <BtnInFormaTionParaCima
          valor="Ola Mundo"
        />
      </fragment>
  );
}

export default App;
