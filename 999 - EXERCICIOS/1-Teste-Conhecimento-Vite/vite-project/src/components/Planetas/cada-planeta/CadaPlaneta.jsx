import React, { Component, useEffect, useState } from "react"
import Img from "../shared/imagens/Img"
import Satellits from "../shared/satellits/Satellits"
import Title from "../shared/title/Title"
import Descrition from "../shared/descrition/Descrition"
import Link from "../shared/link/Link"

// Chamada de uma API inline
async function getSatellits(id_lua) {
    const response = await fetch(`http://127.0.0.1:5173/API/${id_lua}.json`)
    const date = response.json()
    return date
}


// ======= FORMATO COM FUNCTION E HOOKS ======= //

export default function CadaPlaneta(props) {
    const [satellits, setSatellits] = useState([])

    // UseEffect e Como o ComponentDidMounting, "[]" não deixa atulizar e crir um loop
    useEffect(() => {
        console.log(satellits)

        getSatellits(props.id).then(date => {
            setSatellits(date["satellites"])
        })
        
    }, [])

    // Cria as tegs <li> e retorna em um array como props
    function create_li_satellits() {
        const li_satellits = satellits.map((elemento, index) => {
            return <li key={index}>{elemento.name}</li>
        })

        return li_satellits
    }


    return (
        <div id="main-planets">
            <Title 
                title={props.title}
            />
            <Img 
                img={props.img} 
                title={props.title}          
            />
            <Satellits 
                img={props.img}
                li_satellits={create_li_satellits()}
            />
            <Descrition 
                paragrafh={props.paragrafh}
                img={props.img} 
                title={props.title}
            />
            <Link 
                link={props.link}
                paragrafh={props.paragrafh}
                img={props.img} 
                title={props.title}
            />
        </div>
    )
}








// ======= FORMATO COM CLASS E CONSTRUCTOR ======= //

// export default class CadaPlaneta extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             satellits: [

//             ]
//         }
//     }

//     componentDidMount() {
//         getSatellits(this.props.id).then(date => {
//             this.setState(state => ({
//                 satellits: date['satellites']
//             }))
//         })
//     }


//     // Cria as tegs <li> e retorna em um array como props
//     create_li_satellits = () => {
//         const li_satellits = this.state.satellits.map((elemento, index) => {
//             return <li key={index}>{elemento.name}</li>
//         })
//         return li_satellits
//     }


//     render() {
//         return (
//             <div id="main-planets">
//                 <Title 
//                     title={this.props.title}
//                 />
//                 <Img 
//                     img={this.props.img} 
//                     title={this.props.title}          
//                 />
//                 <Satellits 
//                     img={this.props.img}
//                     li_satellits={this.create_li_satellits()}
//                 />
//                 <Descrition 
//                     paragrafh={this.props.paragrafh}
//                     img={this.props.img} 
//                     title={this.props.title}
//                 />
//                 <Link 
//                     link={this.props.link}
//                     paragrafh={this.props.paragrafh}
//                     img={this.props.img} 
//                     title={this.props.title}
//                 />
//             </div>
//         )
//     }
// }