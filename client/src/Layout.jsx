import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import fetch from "cross-fetch";
import Stats from "./Stats";
import tutorworksLogo from "./assets/tutorworks.jpg";

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
    fetch("http://54.156.174.146:3000/click", requestOptions)
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
          <div>
            {this.state.isButtonSubmitted ? (
              <div>
                <div className="navbar bg-base-100">
                  {/* <div>
                    <a href="https://tutorworks.org" target="_blank">
                      <img
                        src={tutorworksLogo}
                        className="tw"
                        alt="Tutorworks logo"
                      />
                    </a>
                  </div> */}
                  <h2 className="center text-3xl font-extrabold">
                    Welcome {this.state.name}!
                  </h2>
                </div>
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
                        <div className="flex flex-col gap-4">
                          <div>
                            <button
                              className="btn btn-outline btn-primary gap-2"
                              onClick={this.setCount}
                            >
                              Kicked Out
                              <div className="badge badge-secondary badge-md">
                                {this.state.count}
                              </div>
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn btn-outline btn-secondary gap-2"
                              onClick={this.setAudioCount}
                            >
                              Audio issue
                              <div className="badge badge-secondary badge-md">
                                {this.state.countAudio}
                              </div>
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn btn-outline btn-warning gap-2"
                              onClick={this.setVideoCount}
                            >
                              Video issue
                              <div className="badge badge-warning badge-md">
                                {this.state.countVideo}
                              </div>
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn btn-outline btn-success gap-2"
                              onClick={this.setFreezeCount}
                            >
                              Freeze issue
                              <div className="badge badge-success badge-md">
                                {this.state.countFreeze}
                              </div>
                            </button>
                          </div>
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
                            autoFocus
                            id="name-input"
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
