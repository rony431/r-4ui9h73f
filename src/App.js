import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      values: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (e) {
    this.setState({values:e.target.value})
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange ={this.handleChange} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.values}</p>
      </div>
    );
  }
}

export default App;
