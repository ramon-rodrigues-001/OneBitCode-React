import React from "react";
import "./Triangle.css"

class Triangle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        return (
            <div id="container-de-triangulo">
                <img src="images/bg-triangle.svg" alt="triangle" id="triangle"/>

                <button id="Rock">
                    <img src="images/icon-rock.svg" alt="Rock" />
                </button>
                <button id="Scissors">
                    <img src="images/icon-scissors.svg" alt="Scissors" />
                </button>
                <button id="Paper">
                    <img src="images/icon-paper.svg" alt="Paper" />
                </button>
            </div>
        )
    }
}

export default Triangle