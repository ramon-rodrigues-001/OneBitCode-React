import React, { Fragment } from "react";
import "./Resultado.css"

function definirResultado(escolhaIA, escolhaPlayer) {
    if (escolhaPlayer === "rock") {
        if (escolhaIA === "scissors" || escolhaIA === "lizard") {
            return "ganhou"
        }
        else if (escolhaIA === "paper" || escolhaIA === "spock") {
            return "perdeu"
        }
        else if (escolhaIA === "rock") {
            return "Empate"
        }
    }
        
    else if (escolhaPlayer === "paper") {
        if (escolhaIA === "rock" || escolhaIA === "spock") {
            return "ganhou"
        }
        else if (escolhaIA === "lizard" || escolhaIA === "scissors") {
            return "perdeu"
        }
        else if (escolhaIA === "paper") {
            return "Empate"
        }
    }

    else if (escolhaPlayer === "scissors") {
        if (escolhaIA === "paper" || escolhaIA === "lizard") {
            return "ganhou"
        }
        else if (escolhaIA === "rock" || escolhaIA === "spock") {
            return "perdeu"
        }
        else if (escolhaIA === "scissors") {
            return "Empate"
        }
    }

    else if (escolhaPlayer === "lizard") {
        if (escolhaIA === "spock" || escolhaIA === "paper") {
            return "ganhou"
        }
        else if (escolhaIA === "rock" || escolhaIA === "scissors") {
            return "perdeu"
        }
        else if (escolhaIA === "lizard") {
            return "Empate"
        }
    }

    else if (escolhaPlayer === "spock") {
        if (escolhaIA === "rock" || escolhaIA === "scissors") {
            return "ganhou"
        }
        else if (escolhaIA === "lizard" || escolhaIA === "paper") {
            return "perdeu"
        }
        else if (escolhaIA === "spock") {
            return "Empate"
        }
    }
}






class Resultado extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    renderH2 = (resulted) => {
        if (resulted === 'ganhou') {
            return <h2>YOU WIN</h2>
        }
        else if (resulted === 'perdeu') {
            return <h2>YOU LOSE</h2>
        }
        else {
            return <h2>YOU WILL TIE</h2>
        }
    }


    render() {
        if (this.props.escolhaIA_escolhaPlayer.escolhaIA !== '') {
            const resulted = definirResultado(this.props.escolhaIA_escolhaPlayer.escolhaIA, this.props.escolhaIA_escolhaPlayer.escolhaPlayer)

            return (
                <div id="container_resultado">
                    <div className="div_img" id="div_Jogador">
                        <p className="paragrafh">YOU PICKED</p>
                       <img src={"images/icon-" + this.props.escolhaIA_escolhaPlayer.escolhaPlayer + ".svg"} alt="Spock" className="img" id="img_Jogador" />
                    </div>
                    <div id="div_Text">
                        {this.renderH2(resulted)}
                        <button id="continuar">CONTINUAR</button>
                    </div>
                    <div className="div_img" id="div_IA">
                        <p className="paragrafh">THE IA PICKED</p>
                        <img src={`images/icon-${this.props.escolhaIA_escolhaPlayer.escolhaIA}.svg`} alt="Spock" className="img" id="img_IA" />
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }
}



export default Resultado