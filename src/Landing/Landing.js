import React, { Component } from 'react';
import Lottie from 'react-lottie'
import "./Landing.css"
import tgbalancer from '../lotties/t-g-balancer.json'
import image1 from '../images/Tolero-design-1.png'
import image2 from '../images/Tolero-design-2.png'

class Landing extends Component {

  render() {
    const animation = {
      loop: true,
      autoplay: true, 
      animationData: tgbalancer,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return(
      <div>
        {/* <h4 className="first-description">
        Tolero is a simple tool for avoiding polarizing posts by integrating instead of discriminating.
        </h4> */}
        <div className="grey-body">
          <br/>
            <p>
            Social media grapples with real challenges of divisiveness,
             misunderstanding and groupthink.
             <br/>
             <br/>
            </p>
          <hr/>
          <div className="teeter-text">
           <p className="t-text">
             The solution is toleration.
           </p>
           <div className="t-animate">
            <Lottie  options={animation} />
           </div>
          </div>
           <hr/>
          <p>
          Sharing opinions on social media can be too easy. <br/> <br/>
          By adding friction in the form of contemplation, 
          we can integrate our point of view with the opposing point of view.
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </p>
        </div>
        <div className="how">
          <h2>How it works</h2>
            <div className="how-steps">
              <p>◯ Define the subject or issue that you want to discuss.</p>
              <p>◓ Share your own opinion and how strongly you feel about it.</p>
              <p>▲  Take a moment to think about an alternative or opposing point of view.</p>
              <p>◑ Clearly state the alternative position and how strongly you agree with it.</p>
              <p>◉ Copy and paste the Tolero formatted protocol and post it anywhere.</p>
              <br/>
              <br/>
              
            </div>
            <h4 className="howitlooks">How it looks ⤵</h4>
        </div>
        <div className="how-to">
          <img className="imgs" src={image1} />
          <img className="imgs" src={image2} />
        </div>
        <div className="post-it">
            <p>Post your Tolero anywhere adding nuance and depth to what you share.</p>
        </div>
        <div className="btn-container">
        <button className="begin" onClick={this.props.beginButton}>Begin</button>
        </div>
      </div>
    )
  }


}

export default Landing;