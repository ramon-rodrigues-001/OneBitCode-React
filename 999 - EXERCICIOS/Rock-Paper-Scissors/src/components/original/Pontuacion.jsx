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
                    <img src="../../../images/image-rules-svg" alt="Rules" />
                </div>
            </Fragment>
        )
    }
}

export default Pontuacion