import React, { Fragment } from 'react'
import GrayImg from '../../shared/gray_img'
import DescritionWithLink from '../../shared/description_with_link'


async function getSatellits(id) {
    const response = await fetch('http://localhost:3000/API/'+id+'json')
    let date = response.json()
    return date
}

function organizarSatelite(stateSatellits) {
    // console.log(stateSatellits)
    const li_satellits = stateSatellits.map((elemento) => {
        return (
            <li>satellit: {elemento.name}</li> 
        )
    })

    // console.log(li_satellits.value)
    return li_satellits
}


class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            satellits: [
            ]
        }
    }

    
    async componentDidMount() {
        // console.log(this.props.title)
        const satellits = await getSatellits(this.props.title)
        this.setState({ satellits: satellits["planets"] })
    }

    render() {
        return (
            <Fragment>
                <h4>{this.props.title}</h4>
                <DescritionWithLink description={this.props.description} link={this.props.link}/>
                <GrayImg 
                    img_url={this.props.img_url}
                    satellits={organizarSatelite(this.state.satellits)}
                    description={this.props.description}
                />
            </Fragment>
        )
    }
}


export default Planet