import React, { Component } from 'react';
import './Prebiner.css'
// import config from '../config'


 
class Combiner extends Component {


  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div className="btn-container-pre">
           <button className="next-three">Next</button>
          </div>
      </form>
    )
  }
  // handleSubmit = (e) => {
  //   // e.preventDefault()
  //   // this.props.goToLog()
  //   return fetch( `${config.API_ENDPOINT}/posts`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       content: this.props.combined,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : this.props.goToLog()
  //         )
      
  // }

  // render() {
  //     return (
  //       <div className="combiner"> 
  //         <input type='textarea' id='clipboard' defaultValue={this.props.combined} >
  //         </input>
  //         <h2>
  //           {this.props.subject}
  //         </h2>
  //         <div>
  //           <p>
  //             ◒ {this.props.usersPos} ◟{this.props.usersRating}◞ ◓ 
  //             ▲ 
  //             ◑ {this.props.oppPos} ◜{this.props.oppRating}◝ ◐ 
  //           </p>
  //         </div>
  //         <button type='submit' onClick={this.handleSubmit}>Add to log</button>
  //         <button onClick={this.props.CopyToClipboard}>Copy to clipboard</button>
  //       </div>
  //     );
  //   }
}


export default Combiner;