import React, { Component } from 'react';
import './Form1.css';
import Info from '../Info/Info'



class Form1 extends Component {
  render() {
    return (
      <div className="form-one">
        <Info page={this.props.page}/>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="users">
              {/* User Position */}
            </label>
            <textarea
              placeholder="  Your opinion"
              maxLength="120"
              className="text-area"
              type="text" 
              name="usersField" 
              id="users"
              value={this.props.usersPos}
              />
         </div>
         <div>
          <label 
            htmlFor="Rating">
            {/* rating */}
          </label>
          <select className="drop-down" name="Rating" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {/* <input 
            type="text" 
            name="userRating" 
            id="rating"
          /> */}
         </div>
         <div className="btn-container">
           <button className="next-one">next</button>
         </div>
        </form>
      </div>
    );
  }
}

export default Form1;