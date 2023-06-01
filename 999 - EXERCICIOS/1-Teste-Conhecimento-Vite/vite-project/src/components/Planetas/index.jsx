import React, { Component, Fragment } from "react"
import "./index.css"
import CadaPlaneta from "./cada-planeta/CadaPlaneta"
import Form from "./shared/form/FormPlanet"


// Pegar os dados da API e retorna para o componentDidMount
async function getPlanets() {
  const response = await fetch ('http://127.0.0.1:5173/API/planets.json')
  const data = response.json()
  return data
}


export default class Planetas extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            Planets: [
              
            ]
        }
    }


    // Acesar a function getPlanets() e adicionar os elementos no state
    componentDidMount() {
      getPlanets().then(data => {
        this.setState(state => ({
          Planets: data['planets']
        }))
      })
    }
    

    addPlanet = (new_planet) => {
      this.setState(state => ({
        Planets: [...this.state.Planets, new_planet]
      }))
    }



    render() {
        return (
            <Fragment>
              <Form 
                addPlanet={this.addPlanet}
              />

              {
                this.state.Planets.map((elemento, index) => {
                    return (
                        <CadaPlaneta 
                          key={index}
                          id={elemento.id}
                          title={elemento.Title}
                          img={elemento.Img}
                          paragrafh={elemento.Paragrafh}
                          link={elemento.Link}
                        />
                    )
                })
              }
            </Fragment>
        )
    }
    
}