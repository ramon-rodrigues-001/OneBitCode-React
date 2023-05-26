import React, {Fragment, Component} from "react"
import Planetas from "./components/Planetas"
import HelloWorld from "./components/Hello-World"
// import { render } from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Planets: [
        {
          Title: 'Mercurio', 
          Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
          Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
          Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
        },{
          Title: 'Plutão', 
          Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
          Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
          Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
        },{
          Title: 'Marte', 
          // Img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
          Paragrafh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecati velit consequatur doloremque qui asperiores distinctio culpa ducimus recusandae. Facilis aliquid sequi amet. Pariatur eveniet molestiae exercitationem voluptate eligendi fuga.",
          Link: "https://pt.wikipedia.org/wiki/Marte_(planeta)"
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <HelloWorld />
        {this.state.Planets.map((e)=> {
            return (
              <Planetas 
                title={e.Title}
                img={e.Img}
                paragrafh={e.Paragrafh}
                link={e.Link}
              />
            )
          })}
      </Fragment>
    )
  }
}

export default App
