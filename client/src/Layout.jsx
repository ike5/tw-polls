import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import fetch from "cross-fetch";
import Stats from "./Stats";

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
        <div className="flex flex-col w-full border-opacity-50">
          {/* <div className="">
            <a href="https://tutorworks.org" target="_blank">
              <img src={tutorworksLogo} className="tw" alt="Tutorworks logo" />
            </a>
          </div> */}

          <div>
            {this.state.isButtonSubmitted ? (
              <div className="flex flex-col space-y-4">
                <Stats />
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <a href="https://hub.tutorworks.net" target="_blank">
                      <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                      />
                    </a>
                  </figure>
                  <div className="card-body">
                    <div>
                      <h1 className="">Hi {this.state.name}!</h1>
                      <div className="flex flex-col gap-4">
                        <div>
                          <button
                            className="btn btn-outline btn-primary"
                            onClick={this.setCount}
                          >
                            Kicked/Booted Out
                          </button>
                          <label>{this.state.count}</label>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline btn-secondary"
                            onClick={this.setAudioCount}
                          >
                            Audio issue
                          </button>
                          <label>{this.state.countAudio}</label>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline btn-warning"
                            onClick={this.setVideoCount}
                          >
                            Video issue
                          </button>
                          <label>{this.state.countVideo}</label>
                        </div>
                        <div>
                          <button
                            className="btn btn-outline btn-success"
                            onClick={this.setFreezeCount}
                          >
                            Freezing issue
                          </button>
                          <label>{this.state.countFreeze}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <a href="https://hub.tutorworks.net" target="_blank">
                      <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                      />
                    </a>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Enter your Name</h2>
                    <div className="card-actions ">
                      <form className="space-y-2" onSubmit={this.handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                          <label className="label"></label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                          />
                        </div>
                        <button
                          className="btn btn-primary w-full"
                          type="submit"
                          disabled={this.state.name < 1}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
