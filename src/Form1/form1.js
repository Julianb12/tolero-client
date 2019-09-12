import React, { Component } from 'react';
import '../Form/Form.css';
import Info from '../Info/Info'



class Form1 extends Component {
  render() {
    return (
      <div className="Form">
        <Info />
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="users">
              User Position
            </label>
            <input 
              type="text" 
              name="usersField" 
              id="users"
              value={this.props.usersPos}
              />
         </div>
         <div>
          <label 
            htmlFor="rating">
            rating
          </label>
          <input 
            type="text" 
            name="userRating" 
            id="rating"
          />
         </div>
        <button>next</button>
        </form>
      </div>
    );
  }
}

export default Form1;