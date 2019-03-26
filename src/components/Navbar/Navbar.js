import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Chiefs Memory Game</li>
          <li className="itemCenter">Click an Image to Begin</li>
          <li className="itemRight">Score: {this.props.score} | High Score: {this.props.highScore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;