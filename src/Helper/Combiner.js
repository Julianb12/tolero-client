import React, { Component } from 'react';
import { restElement } from '@babel/types';
import './Combiner.css'


 
class Combiner extends Component {

  // let text = `◒ ${this.props.usersPos} ◟${this.props.usersRating}◞ 
  // ◓  <p>▲</p> ◑ ${this.props.oppPos} ◜${this.props.oppRating}◝ ◐ `

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   return fetch( `${config.API_ENDPOINT}`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       string: this.props.combined,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //         )
      
  // }

  render() {
    // let combine = `◒ ${this.props.usersPos} ◟${this.props.usersRating}◞ 
    // ◓ ▲ ◑ ${this.props.oppPos} ◜${this.props.oppRating}◝ ◐ #${this.props.subject} #Tolero`;
      return (
        <div> 
          <h2>{this.props.subject}</h2>
          <input type='textarea' id='clipboard' defaultValue={this.props.combined} >
          </input>
          <p>
          ◒ {this.props.usersPos} ◟{this.props.usersRating}◞ 
          ◓ ▲ ◑ ${this.props.oppPos} ◜{this.props.oppRating}◝ ◐ #{this.props.subject} #Tolero
          </p>
          <button type='submit'>Add to log</button>
          <button onClick={this.props.CopyToClipboard}>Copy to clipboard</button>
        </div>
      );
    }
}


export default Combiner;