import React, {Fragment, Component} from "react"
import Planets from "./components/planets/Planets"
import { render } from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Planets: [
        {
          Title: 'Mercurio', 
          Paragrafh: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto a provident dolor voluptatum? Saepe."
        },{
          Title: 'Plutão', 
          Paragrafh: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab architecto a provident dolor voluptatum? Saepe."
        },{
          Title: 'Marte', 
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
              <Planets 
                title={e.Title}
                paragrafh={e.Paragrafh}
              />
            )
          })}
      </Fragment>
    )
  }
}

export default App
