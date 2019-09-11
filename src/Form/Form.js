import React, { Component } from 'react';
import './Form.css';
import Info from '../Info/Info'



class Form extends Component {
  render() {
    return (
      <div className="Form">
        {/* <Info sections={this.props.sections}/> */}
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="issue">
              Subject/issue
            </label>
            <input 
              type="text" 
              name="textField" 
              id="issue"
              value={this.props.subject}
              />
         </div>
         <div>
          <label 
            htmlFor="rating">
            rating
          </label>
          <input 
            type="text" 
            name="otherTextField" 
            id="rating"
          />
         </div>
        <button>next</button>
        </form>
      </div>
    );
  }
}

export default Form;