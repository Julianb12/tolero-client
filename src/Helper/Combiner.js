import React, { Component } from 'react';
import { restElement } from '@babel/types';
import './Combiner.css'
import config from '../config'


 
class Combiner extends Component {

  handleSubmit = (e) => {
    // e.preventDefault()
    // this.props.goToLog()
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
          : this.props.goToLog()
          )
      
  }

  render() {
      return (
        <div className="combined"> 
          <input type='textarea' id='clipboard' defaultValue={this.props.combined} >
          </input>
          <h2 className="string-a">
            {this.props.subject}
          </h2>
          <div className="string">
            <p>
              ◒ {this.props.usersPos} ◟{this.props.usersRating}◞ ◓ 
              <br/>▲<br/> 
              ◑ {this.props.oppPos} ◜{this.props.oppRating}◝ ◐ 
            </p>
          </div>
          <div className="btn-container-combiner">
            <button className="right-button" onClick={this.props.CopyToClipboard}>1: Copy to clipboard</button>
            <button className="left-button" type='submit' onClick={this.handleSubmit}>2: Add to log</button>
          </div>
        </div>
      );
    }
}


export default Combiner;