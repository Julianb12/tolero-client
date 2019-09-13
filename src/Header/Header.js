import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {

    return (
      <ul>
        <li>
          <button onClick={this.props.tolero}>Tolero</button>
        </li>
        {/* <li>
          <a href="#news">Create</a>
        </li> */}
        <li>
        <button onClick={this.props.log}>Log</button>
        </li>
      </ul>
    );
  }
}

export default Header;
