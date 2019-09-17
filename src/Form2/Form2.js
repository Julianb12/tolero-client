import React, { Component } from 'react';
import '../Form/Form.css';
import Info from '../Info/Info'



class Form2 extends Component {
  render() {
    return (
      <div className="Form">
        <Info page={this.props.page}/>
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
            htmlFor="Rating">
            rating
          </label>
          <select name="Rating" defaultValue="3">
            <option value="1">1: do not agree</option>
            <option value="2">2: not agree</option>
            <option value="3" >3: neutral</option>
            <option value="4">4: agree</option>
            <option value="5">5: strongly agree</option>
          </select>
          {/* <input 
            type="text" 
            name="oppRating" 
            id="rating"
          /> */}
         </div>
        <button>next</button>
        </form>
      </div>
    );
  }
}

export default Form2;