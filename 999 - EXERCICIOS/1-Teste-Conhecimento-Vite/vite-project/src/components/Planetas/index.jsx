import React, { Component, Fragment } from "react"
import "./index.css"
import CadaPlaneta from "./cada-planeta/CadaPlaneta"


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
              // {
              //   id: 'Mercurio',
              //   Title: 'Mercurio', 
              //   Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
              //   Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
              //   Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
              // }
            ]
        }
    }


    componentDidMount() {
      getPlanets().then(data => {
        this.setState(state => ({
          Planets: data['planets']
        }))
      })
    }


    addPlanets = () => {
      const Title = prompt('Name of planet')
      const Img = prompt('Ulr imagem')
      const Paragrafh = prompt('Descrition of planet')
      const Link = prompt('link for wikpedia of planet') 

      const newPlanets = {id:Title, Title, Img, Paragrafh, Link}

      this.setState(state => ({
        Planets: [...this.state.Planets, newPlanets]
      }))
    }

    removerPlanets = () => {
      const newPlanets = [...this.state.Planets]
      newPlanets.pop()
      this.setState(state => ({
        Planets: [...newPlanets]
      }))
    }

    render() {
        return (
            <Fragment>
              <button onClick={this.removerPlanets}> Remover </button>
              <button onClick={this.addPlanets}> Adicionar </button>

              {
                this.state.Planets.map((e) => {
                    return (
                        <CadaPlaneta id={e.id}
                          title={e.Title}
                          img={e.Img}
                          paragrafh={e.Paragrafh}
                          link={e.Link}
                        />
                    )
                })
              }
            </Fragment>
        )
    }
    
}