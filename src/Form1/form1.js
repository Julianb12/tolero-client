import React, { Component } from 'react';
import '../Form/Form.css';
// import Info from '../Info/Info'



class Form extends Component {
  render() {
    return (
      <div className="Form">
        {/* <Info sections={this.props.sections}/> */}
        <form>
          <div>
            <label htmlFor="issue">
              Position
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
            name="textField" 
            id="rating"
          />
         </div>
        </form>
        <button onClick={this.props.pageIterate}>next</button>
      </div>
    );
  }
}

export default Form;