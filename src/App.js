import React, { Component } from "react";
import PostRequest from "./PostRequest";

import "./App.css";

class App extends Component {
  state = {
    name: ''
  }
  onSubmit = (e) => {  
    this.setState({ name: '' })
    e.preventDefault();
    console.log("Item Name: " + this.state.name);
    //return this.state.name;
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
          <label for="itemName">Name: </label>
          <input
            type="text"
            className="fld"
            id="itemName"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        <PostRequest />
      </div>
    );
  }
}

export default App;
