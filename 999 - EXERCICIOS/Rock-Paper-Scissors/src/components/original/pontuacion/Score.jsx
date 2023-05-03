import React from "react";
import "./Score.css"

class Pontacion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        return (
            <div id="container-de-pontuacion">
                <img src="images/logo.svg" alt="logo" />
                <span id="pontos">
                    <p id="score">Score</p>
                    12
                </span>
            </div>
        )
    }
}

export default Pontacion