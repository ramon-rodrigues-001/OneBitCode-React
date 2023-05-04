import React from "react";
import "./Resultado.css"

function escolhaRock() {

}


class Resultado extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }


    render() {
        return (
            <div>
                <div>
                    <img src={this.props.escolha} alt="You escolha" />
                </div>
                <div>
                    
                </div>
                <div></div>
            </div>
        )
    }
}



export default Resultado