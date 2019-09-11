import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/448-ripple-loading-animation.json'

class Animate extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    


    return(
      <div>
        {/* <p>◒ fjfjfj ◟5◞ ◓ ▲ ◑ jfjfj ◜3◝ ◐</p> */}
        <Lottie options={defaultOptions}
              height={200}
              width={200}
        />
      </div>
    )
  }
}

export default Animate