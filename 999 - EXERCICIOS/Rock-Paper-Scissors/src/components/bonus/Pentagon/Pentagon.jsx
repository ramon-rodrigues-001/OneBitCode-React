import React, {Fragment} from "react";
import "./Pentagon.css"

class Pentagon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        if (this.props.position == 1) {
            return (
                <Fragment>
                    <div id="container-de-Pentagon">
                        <img src="images/image-rules-bonus.svg" alt="Pentagon" id="Pentagon"/>
                        <button id="Rock" onClick={this.props.youEscolha}>
                            <img src="images/icon-rock.svg" alt="Rock" />
                        </button>
                        <button id="Scissors" onClick={this.props.youEscolha}>
                            <img src="images/icon-scissors.svg" alt="Scissors" />
                        </button>
                        <button id="Paper" onClick={this.props.youEscolha}>
                            <img src="images/icon-paper.svg" alt="Paper" />
                        </button>
                        <button id="Lizard" onClick={this.props.youEscolha}>
                            <img src="images/icon-Lizard.svg" alt="Lizard" />
                        </button>
                        <button id="Spock" onClick={this.props.youEscolha}>
                            <img src="images/icon-Spock.svg" alt="Spock" />
                        </button>
                    </div>
    
                    {/* BTN voltar para jogo orioginal */}
                    <button id="voltar" onClick={this.props.mudarPosition}>Voltar</button>
                </Fragment>
            )
        }
        else {
            return (
                null
            )
        }
    }
}

export default Pentagon