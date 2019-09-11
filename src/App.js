import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Header from './Header/Header';
import Animate from './Animate/Animate';
import Info from './Info/Info';
import Combiner from './Helper/Combiner'
import Form1 from './Form1/form1'

const sections = [
  {
    title: 'More info',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  // {
  //   title: 'Section 2',
  //   content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  // },
  // {
  //   title: 'Section 3',
  //   content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  // },
]

class App extends Component {
  
  state = {
    page: 0,
    subject: '',
    
  };
 
  forms = {0: Form, 1: Form1}

  pageIterate = () => {
    let page = this.state.page + 1
    if (page > 4){
      page = 0;
    }
    this.setState({
      page 
    })
  }
  setSub = () => {

  }
  handleSubmit = (e) => {
    //textField is Name on input
    e.preventDefault()
    const input = e.target.elements['textField'].value;
    this.pageIterate();
    this.setState({subject: input})
    console.log(input);
  }


  render() {
    let form = this.forms[this.state.page]

    const props = {
      subjectInput: this.subjectInput
    }

    return (
    <div>
      <Header />
      <Animate />
      <Info sections={sections}/>
      { this.state.page === 0 && <Form {...props} handleSubmit={this.handleSubmit}/> }
      { this.state.page === 1 && <Form1 {...props}/> }
      {/* <form 
      subjectInput={this.state.subject}
      pageIterate={this.pageIterate}/> */}
      <Combiner />
    </div>




  
    );
  }
}

export default App;

`````

// const forms = { 0: Form0, 1: Form1, 2: Form2 }; let form = forms[this.state.page];

// { form }

// <form prop1=prop></form>