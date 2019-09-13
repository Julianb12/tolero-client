import React, { Component } from 'react';
import { restElement } from '@babel/types';
import './Combiner.css'
import config from '../config'


 
class Combiner extends Component {

  handleSubmit = (e) => {
    // e.preventDefault()
    this.props.goToLog()
    return fetch( `${config.API_ENDPOINT}/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        content: this.props.combined,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
          )
      
  }

  render() {
      return (
        <div> 
          <input type='textarea' id='clipboard' defaultValue={this.props.combined} >
          </input>
          <h2>
            {this.props.subject}
          </h2>
          <p>
          ◒ {this.props.usersPos} ◟{this.props.usersRating}◞ ◓ 
          ▲ 
          ◑ {this.props.oppPos} ◜{this.props.oppRating}◝ ◐ 
          </p>
          <button type='submit' onClick={this.handleSubmit}>Add to log</button>
          <button onClick={this.props.CopyToClipboard}>Copy to clipboard</button>
        </div>
      );
    }
}


export default Combiner;