import React, { Component } from "react"
import "./index.css"
import CadaPlaneta from "./cada-planeta/CadaPlaneta"

export default class Planetas extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            Planets: [
              {
                id: 'Mercurio',
                Title: 'Mercurio', 
                Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
                Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
                Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
              },{
                id: 'Plutão',
                Title: 'Plutão', 
                Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
                Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
                Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
              },{
                id: 'Marte',
                Title: 'Marte', 
                // Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
                Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
                Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
              }
            ]
        }
    }

    addPlanets(objeto_planet) {
      this.state.Planets.push(objeto_planet)
      console.log(this.state.Planets)
      this.render()
    }

    render() {
        return (
            this.state.Planets.map((e) => {
                return (
                    <CadaPlaneta key={e.id}
                      title={e.Title}
                      img={e.Img}
                      paragrafh={e.Paragrafh}
                      link={e.Link}
                    />
                )
            })
        )
    }
    
}