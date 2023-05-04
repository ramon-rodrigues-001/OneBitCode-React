import React, { Fragment, useState } from 'react';
import Pontuacion from './components/pontuacion/Score';
import Triangle from './components/original/triangle/Triangle';
import Pentagon from './components/bonus/Pentagon/Pentagon';
import Resultado from './components/ResultadoPartida/Resultado';



function App() {
  const [position, setPosition] = useState(0)
  function mudarPosition() {
    setPosition(position === 0 ? 1 : 0);
  }

  const [escolhaIA_escolhaPlayer, setEscolhaIA_escolhaPlayer] = {
    escolhaIA: '',
    escolhaPlayer: ''
  }

  function youEscolha(evento) {
    // Defenido a escolha do IA
    let posibles;
    let ramdomIA;

    if (position == 0) {
      posibles = [
        "Rock", 
        "Paper", 
        "Scissors"]
      ramdomIA = Math.floor(Math.random() * 3)
    }
    else if (position == 1) {
      posibles = [
        "Rock", 
        "Paper", 
        "Scissors", 
        "Lizard", 
        "Spock"]
      ramdomIA = Math.floor(Math.random() * 5)
    }
    
    // Coletando a escolha do jogador
    const alvo = evento.currentTarget;

    setEscolhaIA_escolhaPlayer(escolhaIA_escolhaPlayer = {
      escolhaIA: posibles[ramdomIA],
      escolhaPlayer: alvo
    })

    // if (alvo.id === "Rock") {
    //   if (posibles[ramdomIA] === "Scissors" || posibles[ramdomIA] === "Lizard") {
    //     alert("VC ganhou")
    //   }
    //   else if (posibles[ramdomIA] === "Paper" || posibles[ramdomIA] === "Spock") {
    //     alert("VC perdeu")
    //   }
    //   else if (posibles[ramdomIA] === "Rock") {
    //     alert("Empate")
    //   }
    // }
    
    // else if (alvo.id === "Paper") {
    //   if (posibles[ramdomIA] === "Rock" || posibles[ramdomIA] === "Spock") {
    //     alert("VC ganhou")
    //   }
    //   else if (posibles[ramdomIA] === "Lizard" || posibles[ramdomIA] === "Scissors") {
    //     alert("VC perdeu")
    //   }
    //   else if (posibles[ramdomIA] === "Paper") {
    //     alert("Empate")
    //   }
    // }

    // else if (alvo.id === "Scissors") {
    //   if (posibles[ramdomIA] === "Paper" || posibles[ramdomIA] === "Lizard") {
    //     alert("VC ganhou")
    //   }
    //   else if (posibles[ramdomIA] === "Rock" || posibles[ramdomIA] === "Spock") {
    //     alert("VC perdeu")
    //   }
    //   else if (posibles[ramdomIA] === "Scissors") {
    //     alert("Empate")
    //   }
    // }

    // else if (alvo.id === "Lizard") {
    //   if (posibles[ramdomIA] === "Spock" || posibles[ramdomIA] === "Paper") {
    //     alert("VC ganhou")
    //   }
    //   else if (posibles[ramdomIA] === "Rock" || posibles[ramdomIA] === "Scissors") {
    //     alert("VC perdeu")
    //   }
    //   else if (posibles[ramdomIA] === "Lizard") {
    //     alert("Empate")
    //   }
    // }

    // else if (alvo.id === "Spock") {
    //   if (posibles[ramdomIA] === "Rock" || posibles[ramdomIA] === "Scissors") {
    //     alert("VC ganhou")
    //   }
    //   else if (posibles[ramdomIA] === "Lizard" || posibles[ramdomIA] === "Paper") {
    //     alert("VC perdeu")
    //   }
    //   else if (posibles[ramdomIA] === "Spock") {
    //     alert("Empate")
    //   }
    // }
  };


  return (
    <Fragment>
      <Pontuacion 
        position={position}
      />
      if (escolhaIA_escolhaPlayer.escolhaIA === '') {
        <h1>Ola</h1>
      }
      {/* <Pentagon  
        position={position}
        mudarPosition={mudarPosition}
        youEscolha={youEscolha}
      />
      <Triangle  
        position={position}
        mudarPosition={mudarPosition}
        youEscolha={youEscolha}
      /> */}
    </Fragment>
  ); 
}

export default App;
