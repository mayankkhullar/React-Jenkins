import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Home <span className="badge badge-pillbadge-secondary"></span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
