import React, { Component } from 'react';

// let subject = "Bobby Bob";

// let usersPos = "Lorem Ipsum blah blah";

// let usersPosRating = 4;

// let opposingPos = "Sunny buffalo mountain";

// let opposingPosRating = 2;

// let combine = `◒ ${usersPos} ◟${usersPosRating}◞ 
//   ◓ ▲ ◑ ${opposingPos} ◜${opposingPosRating}◝ ◐ #${subject} #Tolero`;
 
class Combiner extends Component {

  // const this.props.state = {subject, usersPos, usersRating, oppPos, oppRating}

  render() {
    let combine = `◒ ${this.props.usersPos} ◟${this.props.usersRating}◞ 
    ◓ ▲ ◑ ${this.props.oppPos} ◜${this.props.oppRating}◝ ◐ #${this.props.subject} #Tolero`;
      return (
        combine
      );
    }
}


export default Combiner;