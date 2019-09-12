import React, { Component } from 'react';
import '../Form/Form.css';
import Info from '../Info/Info'



class Form2 extends Component {
  render() {
    return (
      <div className="Form">
        <Info />
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="opps">
              Opp Position
            </label>
            <input 
              type="text" 
              name="oppsField" 
              id="opps"
              value={this.props.oppsPos}
              />
         </div>
         <div>
          <label 
            htmlFor="rating">
            rating
          </label>
          <input 
            type="text" 
            name="oppRating" 
            id="rating"
          />
         </div>
        <button>next</button>
        </form>
      </div>
    );
  }
}

export default Form2;