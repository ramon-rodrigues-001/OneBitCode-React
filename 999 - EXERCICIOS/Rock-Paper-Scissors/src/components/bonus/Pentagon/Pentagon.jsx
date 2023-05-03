import React from "react";
import "./Pentagon.css"

class Pentagon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        return (
            <div id="container-de-Pentagon">
                <img src="images/image-rules-bonus.svg" alt="Pentagon" id="Pentagon"/>

                <button id="Rock">
                    <img src="images/icon-rock.svg" alt="Rock" />
                </button>
                <button id="Scissors">
                    <img src="images/icon-scissors.svg" alt="Scissors" />
                </button>
                <button id="Paper">
                    <img src="images/icon-paper.svg" alt="Paper" />
                </button>

                
                <button id="Lizard">
                    <img src="images/icon-Lizard.svg" alt="Lizard" />
                </button>
                <button id="Spock">
                    <img src="images/icon-Spock.svg" alt="Spock" />
                </button>
            </div>
        )
    }
}

export default Pentagon