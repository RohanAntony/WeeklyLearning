import React, { Component } from 'react'; //React is the default app
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Hello World! </p>
      </div>
    );
  }
}

export default App; //default export don;t need  a curly braces
//only one module can default during export
