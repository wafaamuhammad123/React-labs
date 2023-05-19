import React, { Component } from "react";
import './Input.css'
class Input extends Component {
 
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  getData = (e) => {
    this.setState({ name: e.target.value });
  };

  handleReset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <h1>Hii sweeties</h1>
        <div className='input'>
        <input type="text" value={this.state.name} onChange={this.getData} /> 
        <p>{this.state.name}</p>
        <button onClick={this.handleReset}>Reset</button>
        
      </div>
      </div>
    );
  }
}

export default Input;
