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
    };
  }

  clicked = (issueValue) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: new Date().toLocaleString(),
        user: this.state.name,
        issue: issueValue,
      }),
    };
    fetch("http://localhost:3346/click", requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  setCount = (event) => {
    this.setState({
      count: this.state.count + 1,
    });
    this.clicked("Kicked/Booted Out");
  };

  setAudioCount = (event) => {
    this.setState({
      countAudio: this.state.countAudio + 1,
    });
    this.clicked("Audio");
  };

  setVideoCount = (event) => {
    this.setState({
      countVideo: this.state.countVideo + 1,
    });
    this.clicked("Video");
  };

  setFreezeCount = (event) => {
    this.setState({
      countFreeze: this.state.countFreeze + 1,
    });
    this.clicked("Freezes");
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
              <div>
                <button onClick={this.setCount}>Kicked/Booted Out</button>
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
              <form className="space-y-2" onSubmit={this.handleSubmit}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </div>
                <button className="btn btn-primary w-64" type="submit" disabled={this.state.name < 1}>
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
