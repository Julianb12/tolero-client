import React, { Component } from 'react'
import './Info.css'

class Info extends Component {


  state = {
    content: false
  }


  showContent = () => {
    console.log('here')
    this.setState({ content: !this.state.content })
    console.log(this.state.content)
  }


  render() {

    return (
      <div>
        <button className="info-button" onClick={this.showContent}>Info</button>
        { this.state.content === true && this.props.page === 1 && <p>Choose the issue or subject you want to discuss.</p>}
        { this.state.content === true && this.props.page === 2 && <p>Enter your opinion of the subject and select how strongly you feel about it from the dropdown menu (1-5).</p>}
        { this.state.content === true && this.props.page === 3 && <p>Enter an opposing opinion to your own and select how strongly you agree with it.</p>}
      </div>
    )
  }
}

export default Info;






