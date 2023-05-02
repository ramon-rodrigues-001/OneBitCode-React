import React, {Fragment} from "react";

class Pontuacion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            null: null
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Olaa</h1>
                <div>
                    {/* COMO DEVO DESCREVER O CAMINHO DO IMG QUANTOS ../ DEVO ESCREVER */}
                    <img src="../images/bg-pentagon.svg" alt="Rules" />
                </div>
            </Fragment>
        )
    }
}

export default Pontuacion