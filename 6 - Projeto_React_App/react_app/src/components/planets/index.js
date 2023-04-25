import React from 'react'
import Planet from './planet'
import './style.css'


async function getPlanets() {
    let response = await fetch('http://localhost:3000/API/planets.json')
    let date = response.json()
    return date
}


class Planets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [
                /*  {
                    title: "Mercurio",
                    description: "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.",
                    link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                } */
            ]
        }
    }

    componentDidMount() {
        getPlanets().then(date => {
            this.setState(state => ({
                planets: date['planets']
            }))
        })
    }


    removePlanet = () => {
        const planetas = [...this.state.planets]
        planetas.pop()
        this.setState(state => ({
            planets: [...planetas]
        }))
    }

    newRenderizar = () => {
        const lastPlanet = this.state.planets[this.state.planets.length - 1]
        this.setState(stata => ({
            planets: [...this.state.planets, lastPlanet]
        }))
    }

    render() {
        return (
            <div className='div-planets'>
                <h2>Planets</h2>
                <button onClick={this.removePlanet}>Remove Planet</button><button onClick={this.newRenderizar}>Add New Planet</button>
                <hr />

                {
                    this.state.planets.map((planet) => {
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
}

export default Planets
