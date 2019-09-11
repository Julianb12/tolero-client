import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="#home">Tolero</a>
        </li>
        <li>
          <a href="#news">Create</a>
        </li>
        <li>
          <a href="#contact">Log</a>
        </li>
      </ul>
    );
  }
}

export default Header;
