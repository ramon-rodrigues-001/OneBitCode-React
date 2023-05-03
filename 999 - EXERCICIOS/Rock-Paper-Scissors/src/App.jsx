import React, { Fragment } from 'react';
import Pontuacion from './components/pontuacion/Score';
import Triangle from './components/original/triangle/Triangle';
import Pentagon from './components/bonus/Pentagon/Pentagon';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0
    }
  }

  mudarPosition = () => {
    if (this.state.position === 0) {
      this.setState({ position: 1 })
    }
    else {
      this.setState({ position: 0 })
    }
  }

  render() {
    return (
      <Fragment>
        <Pontuacion 
          position={this.state.position}
        />
        <Pentagon  
          position={this.state.position}
          mudarPosition={this.mudarPosition}
        />
        <Triangle  
          position={this.state.position}
          mudarPosition={this.mudarPosition}
        />
      </Fragment>
    );
  }
}

export default App;
