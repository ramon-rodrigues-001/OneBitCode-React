import React, {Fragment, Component} from "react"
import Planetas from "./components/Planets/planetas/Planetas"
// import { render } from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Planets: [
        {
          Title: 'Mercurio', 
          Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
          Paragrafh: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto a provident dolor voluptatum? Saepe."
        },{
          Title: 'Plutão', 
          Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
          Paragrafh: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto a provident dolor voluptatum? Saepe."
        },{
          Title: 'Marte', 
          Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
          Paragrafh: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto a provident dolor voluptatum? Saepe."
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <h1>hello world</h1>
        {this.state.Planets.map((e)=> {
            return (
              <Planetas 
                title={e.Title}
                img={e.Img}
                paragrafh={e.Paragrafh}
              />
            )
          })}
      </Fragment>
    )
  }
}

export default App
