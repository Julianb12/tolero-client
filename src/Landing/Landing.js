import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return(
      <div>
        <h2>
          Tolero
        </h2>
        <p>
          Lorem ipsum lorem ipsum
        </p>
        <button onClick={this.props.beginButton}>Begin</button>
      </div>
    )
  }


}

export default Landing;