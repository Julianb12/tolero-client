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
          <br/>
          <p>Gobbly goop</p>
          <Lottie options={animation} height={150} width={150}/>
        </div>
          <h2 className="how-title" >How it works</h2>
        <div className="how-to">
          <img className="imgs" src={image1} />
          <img className="imgs" src={image2} />
        </div>
        <p>
          Lorem ipsum lorem ipsum akjdflaj dfjalksfj lasjd flkajsd flajsd fljas dlfja s
          <br/>
         
         
        </p>
        <button onClick={this.props.beginButton}>Begin</button>
      </div>
    )
  }


}

export default Landing;