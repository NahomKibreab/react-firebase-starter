import React, { Component } from "react";
import "./App.css";
import fire from "./fire";

class App extends Component {
  state = {
    text: "",
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    let messageRef = fire
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    fire.database().ref("messages").push(this.state.text);
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div className="App-header">
        <h1>Send Messages to Firebase</h1>
        <input
          type="text"
          onChange={this.handleText}
          id="inputText"
          value={this.state.text}
        />
        <br />
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}

export default App;
