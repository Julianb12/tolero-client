import React, { Component } from 'react'
import Lottie from 'react-lottie'
// import animationData from '../lotties/448-ripple-loading-animation.json'
import tSeq1 from '../lotties/t-seq-1.json'
import tSeq2 from '../lotties/t-seq-2.json'
import tSeq3 from '../lotties/t-seq-3.json'
import tSeq4 from '../lotties/t-seq-4.json'
import tLanding from '../lotties/t-landing-pg.json'

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
        const animationLanding = {
          loop: true,
          autoplay: true, 
          animationData: tLanding,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };

    let part = this.props.page;
    
    // if (part === 0){
    //   animation.animationData = tLanding;
    // }
    if (part === 1){
      animation.animationData = tSeq1;
    }
    if (part === 2){
      animation.animationData = tSeq2;
    }
    if (part === 3){
      animation.animationData = tSeq3;
    }
    if (part === 4){
      animation.animationData = tSeq4;
    }
    // animation.animationData =

    return(
      <div>
        {this.props.page === 0 && <Lottie options={animationLanding}/> }
        {this.props.page > 0 && <Lottie options={animation}
          height={400}
          width={400}/> }
        {/* <Lottie options={animation}
               height={400}
               width={400}
        /> */}
      </div>
    )
  }
}

export default Animate