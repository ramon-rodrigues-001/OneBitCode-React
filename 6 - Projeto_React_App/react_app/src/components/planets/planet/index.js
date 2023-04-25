import React, { fragment } from 'react'
import GrayImg from '../../shared/gray_img'
import DescritionWithLink from '../../shared/description_with_link'


function getSatellits(id) {
    const response = fetch('http://localhost:3000/API/' + id + '.json/')
    const satellits = response.json()
    return satellits
}

function organizarSatelite(stateSatellits) {
    const satellits = stateSatellits.map((nome) => {
        return (
            <li>satellit: {nome}</li>
        )
    })

    return satellits
}


class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            satellits: [

            ]
        }
    }

    componentDidMount() {
        getSatellits(this.props.title).then(satellits => {
            this.setState(state => ({
                satellits: satellits["satellites"]
            }))
        })
    }

    render() {
        return (
            <fragment>
                <h4>{this.props.title}</h4>
                <DescritionWithLink description={this.props.description} link={this.props.link}/>
                <GrayImg 
                    img_url={this.props.img_url}
                    satellits={organizarSatelite(this.state.satellits)}
                    description={this.props.description}
                />
            </fragment>
        )
    }
}


export default Planet