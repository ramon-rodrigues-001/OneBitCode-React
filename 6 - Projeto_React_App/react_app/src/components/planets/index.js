import React, { useEffect, useState } from 'react'
import Planet from './planet'
import './style.css'


async function getPlanets() {
    let response = await fetch('http://localhost:3000/API/planets.json')
    let date = await response.json()
    return date
}



function Planets(props) {
    const [Planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(date => {
             setPlanets(Planets + data['planets'])
        })
    })

    removePlanet = () => {
        const planetas = [...state.planets]
        planetas.pop()
        setPlanets(Planets - planetas)
    }

    adicionarPlanet = () => {
        const lastPlanet = state.planets[state.planets.length - 1]
        setPlanets(Planets + lastPlanet)
    }

    return (
        <div className='div-planets'>
            <h2>Planets</h2>
            <button onClick={removePlanet}>Remove Planet</button><button onClick={adicionarPlanet}>Add New Planet</button>
            <hr />

            {
                state.planets.map((planet) => {
                    return (
                        <Planet
                            title={planet.title}
                            description={planet.description}
                            link={planet.link}
                            img_url={planet.img_url}

                        />
                    )
                })
            }
        </div>
    )
}

export default Planets


// class Planets extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             planets: [
//                 
//             ]
//         }
//     }

//     componentDidMount() {
//         getPlanets().then(date => {
//             this.setState(state => ({
//                 planets: date['planets']
//             }))
//         })
//     }


//     removePlanet = () => {
//         const planetas = [...this.state.planets]
//         planetas.pop()
//         this.setState(state => ({
//             planets: [...planetas]
//         }))
//     }

//     newRenderizar = () => {
//         const lastPlanet = this.state.planets[this.state.planets.length - 1]
//         this.setState(stata => ({
//             planets: [...this.state.planets, lastPlanet]
//         }))
//     }

//     render() {
//         return (
//             <div className='div-planets'>
//                 <h2>Planets</h2>
//                 <button onClick={this.removePlanet}>Remove Planet</button><button onClick={this.newRenderizar}>Add New Planet</button>
//                 <hr />

//                 {
//                     this.state.planets.map((planet) => {
//                         return (
//                             <Planet
//                                 title={planet.title}
//                                 description={planet.description}
//                                 link={planet.link}
//                                 img_url={planet.img_url}

//                             />
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
