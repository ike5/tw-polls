import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import tutorworksLogo from "./assets/tutorworks.jpg";
import fetch from "cross-fetch";


export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      countAudio: 0,
      countVideo: 0,
      countFreeze: 0,
      isButtonSubmitted: false,
      name: "",
      postId: "",
    };
  }

  clicked = () => {
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
    fetch("http://localhost:3345/click", requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  setCount = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  setAudioCount = (event) => {
    this.setState({
      countAudio: this.state.countAudio + 1,
    });
  };

  setVideoCount = (event) => {
    this.setState({
      countVideo: this.state.countVideo + 1,
    });
  };

  setFreezeCount = (event) => {
    this.setState({
      countFreeze: this.state.countFreeze + 1,
    });
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.setState({
      isButtonSubmitted: true,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <a href="https://hub.tutorworks.net" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://tutorworks.org" target="_blank">
            <img src={tutorworksLogo} className="logo" alt="Tutorworks logo" />
          </a>
        </div>

        <div className="card">
          {this.state.isButtonSubmitted ? (
            <div>
              <h1>Hi {this.state.name}!</h1>
              <h1>{this.state.postId}</h1>
              <div>
                <button
                  onClick={() => {
                    this.setCount();
                    this.clicked();
                  }}
                >
                  Kicked/Booted Out
                </button>
                <label>{this.state.count}</label>
              </div>
              <div>
                <button onClick={this.setAudioCount}>Audio issue</button>
                <label>{this.state.countAudio}</label>
              </div>
              <div>
                <button onClick={this.setVideoCount}>Video issue</button>
                <label>{this.state.countVideo}</label>
              </div>
              <div>
                <button onClick={this.setFreezeCount}>Freezing issue</button>
                <label>{this.state.countFreeze}</label>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  ></input>
                </div>
                <button type="submit" disabled={this.state.name < 1}>
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
