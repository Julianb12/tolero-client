import React, { Component } from 'react';
import './Form.css';
import Info from '../Info/Info'



class Form extends Component {
  render() {
    return (
      <div className="form">
        <Info page={this.props.page}/>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="issue">
              Subject
            </label>
            <textarea
              className="text-area"
              maxLength="24"
              name="subjectField" 
              id="issue"
              value={this.props.subject}
              />
         </div>
          <div className="btn-container">
           <button className="next">next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

