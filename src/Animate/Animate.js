import React, { Component } from 'react'
import Lottie from 'react-lottie'
// import animationData from '../lotties/448-ripple-loading-animation.json'
import data1 from '../lotties/data_1.json'
import data2 from '../lotties/data_2.json'
import data3 from '../lotties/data_3.json'
import data4 from '../lotties/data_4.json'

class Animate extends Component {


  render(){
    
        const animation = {
          loop: false,
          autoplay: true, 
          animationData: '',
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };

    let part = this.props.page;

    if (part === 1){
      animation.animationData = data1;
    }
    if (part === 2){
      animation.animationData = data2;
    }
    if (part === 3){
      animation.animationData = data3;
    }
    if (part === 4){
      animation.animationData = data4;
    }
    // animation.animationData =

    return(
      <div>
        <Lottie options={animation}
              height={200}
              width={200}
        />
      </div>
    )
  }
}

export default Animate