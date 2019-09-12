import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Form1 from './Form1/form1.js'
import Form2 from './Form2/Form2.js'
import Header from './Header/Header';
import Animate from './Animate/Animate';
import Info from './Info/Info';
import Combiner from './Helper/Combiner'
import Landing from './Landing/Landing'


class App extends Component { 
  
  state = {
    page: 0,
    subject: '',
    usersPos: '',
    usersRating: 0,
    oppPos: '',
    oppRating: 0,
    wholeString: ''
  };
 
  // forms = {0: Form, 1: Form1, 2: Form2}

  pageIterate = () => {
    let page = this.state.page + 1
    if (page > 5){
      page = 0;
    }
    this.setState({
      page 
    })
  }
  // setSub = () => {
  
  // }
  handleSubmitSubject = (e) => {
    //textField is Name on input
    e.preventDefault()
    const input = e.target.elements['subjectField'].value;
    this.pageIterate();
    this.setState({subject: input})
    console.log(input);
  }

  handleSubmitUsers = (e) => {
    //textField is Name on input
    e.preventDefault()
    const input = e.target.elements['usersField'].value;
    const inputRating = e.target.elements['userRating'].value;
    this.pageIterate();
    this.setState({usersPos: input})
    this.setState({usersRating: inputRating})
    console.log(input);
  }

  handleSubmitOpps = (e) => {
    //textField is Name on input
    e.preventDefault()
    const input = e.target.elements['oppsField'].value;
    const inputRating = e.target.elements['oppRating'].value;
    const combined = `◒ ${this.state.usersPos} ◟${this.state.usersRating}◞ 
    ◓  <p>▲</p> ◑ ${this.state.oppPos} ◜${this.state.oppRating}◝ ◐ `
    this.pageIterate();
    this.setState({oppPos: input})
    this.setState({oppRating: inputRating})
    this.setState({wholeString: combined})
    console.log(input);
  }

  //function 

  handleBegin = (e) => {
    e.preventDefault()
    this.pageIterate();
  }

  handleToleroNavClick = (e) => {
    e.preventDefault()
    this.setState({page: 0})
  }

  copyToClipboard = (e) => {
    // let copyString = `◒ ${this.state.usersPos} ◟${this.state.usersRating}◞ 
    // ◓ \n ▲ \n ◑ ${this.state.oppPos} ◜${this.state.oppRating}◝ ◐ ` ;
    let target = document.getElementById('clipboard')
    target.select();
    console.log(target);
    // copyString.select();
    document.execCommand("copy");
    // console.log(copyString);
  }

  
  render() {
    // let form = this.forms[this.state.page]
    
    // const props = {
    //   subjectInput: this.subjectInput
    // }

    return (
    <div>
      <Header tolero={this.handleToleroNavClick}/>
      <Animate page={this.state.page}/>
      {/* <Info page={this.state.page}/>  */}
      { this.state.page === 0 && <Landing  beginButton={this.handleBegin}/> }
      { this.state.page === 1 && <Form  handleSubmit={this.handleSubmitSubject}/> }
      { this.state.page === 2 && <Form1  handleSubmit={this.handleSubmitUsers}/> }
      { this.state.page === 3 && <Form2  handleSubmit={this.handleSubmitOpps}/> }
      { this.state.page === 4 && <Combiner subject={this.state.subject} usersPos={this.state.usersPos} 
      usersRating={this.state.usersRating} oppPos={this.state.oppPos} oppRating={this.state.oppRating}
      combined={this.state.wholeString} 
      CopyToClipboard={this.copyToClipboard} />} 

      {/* <Combiner /> */}
      {/* { this.state.page === 2 && <Form2  handleSubmit={this.handleSubmitOpps}/> } */}
      {/* <form 
      subjectInput={this.state.subject}
      pageIterate={this.pageIterate}/> */}
    </div>

    );
  }
}

export default App;



// const forms = { 0: Form0, 1: Form1, 2: Form2 }; let form = forms[this.state.page];

// { form }

// <form prop1=prop></form>