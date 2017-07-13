import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './Components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Calculator />
      </div>
    );
  }
}

export default App;
