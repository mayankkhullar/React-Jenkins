import React, { Component } from "react";
/*import logo from "./logo.svg";*/
import Counters from "./components/counters";
import "./App.css";

import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    jobs: [],
    flask: [],
  };

  handleJobsCount = () => {
    var headers = new Headers();

    headers.append(
      "Authorization",
      "Bearer" + "1150e097a30ef7e4d243a5755c8bcb70dc"
    );
    return fetch("/time")
      .then((res) => res.json())
      .then((data) => this.setState({ flask: data.jobs1 }))
      .catch((err) => console.error(err));
  };

  componentDidMount = () => {
    this.handleJobsCount();
    console.log(this.state.flask);

    /*console.log(this.jo);*/
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <div className="">
            <img src=""></img>
            <div className="w-25 p-3" style={{ height: 90, float: "left" }}>
              <h6>Total Jobs</h6>
              <p style={{ color: "lightblue" }}>{this.state.jobs.length}</p>
              <p>{this.state.flask}</p>
            </div>
            <div
              className="w-25 p-3"
              style={{ height: 100, width: 40, float: "right" }}
            >
              <h6 className="">Successfull Jobs</h6>
              <p style={{ color: "blue" }}>
                {this.state.jobs.filter((job) => job.color === "blue").length}
              </p>
            </div>
            <div
              className="w-25 p-3"
              style={{ height: 100, width: 40, float: "right" }}
            >
              <h6>Not built Jobs</h6>
              <p style={{ color: "yellow" }}>
                {
                  this.state.jobs.filter((job) => job.color === "notbuilt")
                    .length
                }
              </p>
            </div>
            <div
              className="w-25 p-3"
              style={{ height: 100, width: 40, float: "right" }}
            >
              <h6>Failed Jobs</h6>
              <p style={{ color: "red" }}>
                {this.state.jobs.filter((job) => job.color === "red").length}
              </p>
            </div>
            <ul>
              {this.state.jobs.map((job) => (
                <li key={job.name}>{job.name}</li>
              ))}
            </ul>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
