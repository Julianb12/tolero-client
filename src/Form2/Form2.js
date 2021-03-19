import React, { Component } from 'react';
import './Form2.css';
import Info from '../Info/Info'



class Form2 extends Component {
  render() {
    return (
      <div className="form-two">
        {/* <Info page={this.props.page}/> */}
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="opps">
              {/* Opp Position */}
            </label>
            <textarea
              placeholder="  Opposing opinion"
              maxLength="120"
              className="text-area"
              type="text"
              name="oppsField"
              id="opps"
              value={this.props.oppsPos}
            />
          </div>
          <div>
            <label
              htmlFor="Rating">
            </label>
            <select className="drop-down" name="Rating" defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

          </div>
          <div className="btn-container">
            <button className="next-two">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form2;