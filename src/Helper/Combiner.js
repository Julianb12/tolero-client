import React, { Component } from 'react';

let subject = "Bobby Bob";

let usersPos = "Lorem Ipsum blah blah";

let usersPosRating = 4;

let opposingPos = "Sunny buffalo mountain";

let opposingPosRating = 2;

let combine = `◒ ${usersPos} ◟${usersPosRating}◞ 
  ◓ ▲ ◑ ${opposingPos} ◜${opposingPosRating}◝ ◐ #${subject} #Tolero`;
 
class Combiner extends Component {

    render() {
      return (
        combine
      );
    }
}


export default Combiner;