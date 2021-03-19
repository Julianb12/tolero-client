import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {

    return (
      <ul>
        <li>
          <button className="home-button" onClick={this.props.tolero}>Tolero</button>
        </li>
        <li>
          <button className="log-button" onClick={this.props.log}>log</button>
        </li>
      </ul>
    );
  }
}

export default Header;
