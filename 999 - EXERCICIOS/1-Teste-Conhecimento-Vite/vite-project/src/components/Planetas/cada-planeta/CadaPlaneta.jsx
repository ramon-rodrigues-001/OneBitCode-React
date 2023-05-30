import React, { Component } from "react"
import Img from "../shared/imagens/Img"
import Satellits from "../shared/satellits/Satellits"
import Title from "../shared/title/Title"
import Descrition from "../shared/descrition/Descrition"
import Link from "../shared/link/Link"

async function getSatellits(id_lua) {
    const response = await fetch(`http://127.0.0.1:5173/API/${id_lua}.json`)
    const date = response.json()
    return date
}


export default class CadaPlaneta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            satellits: [

            ]
        }
    }

    componentDidMount() {
        getSatellits(this.props.id).then(date => {
            this.setState(state => ({
                satellits: date['satellites']
            }))
        })
    }


    create_li_satellits = () => {
        const li_satellits = this.state.satellits.map(elemento => {
            return <li>{elemento.name}</li>
        })
        return li_satellits
    }


    render() {
        return (
            <div id="main-planets">
                <Title 
                    title={this.props.title}
                />
                <Img 
                    img={this.props.img} 
                    title={this.props.title}          
                />
                <Satellits 
                    img={this.props.img}
                    li_satellits={this.create_li_satellits()}
                />
                <Descrition 
                    paragrafh={this.props.paragrafh}
                    img={this.props.img} 
                    title={this.props.title}
                />
                <Link 
                    link={this.props.link}
                    paragrafh={this.props.paragrafh}
                    img={this.props.img} 
                    title={this.props.title}
                />
            </div>
        )
    }
}