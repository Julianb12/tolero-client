import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Form1 from './Form1/form1.js'
import Form2 from './Form2/Form2.js'
import Header from './Header/Header';
import Animate from './Animate/Animate';
// import Info from './Info/Info';
import Combiner from './Helper/Combiner'
import Prebiner from './Prebiner/Prebiner'
import Landing from './Landing/Landing'
import Log from './Log/Log'
import Description from './Description/Description'

// zeit address: https://tolero-app.julianb1212.now.sh

class App extends Component {

  state = {
    page: 0,
    subject: '',
    usersPos: '',
    usersRating: 0,
    oppPos: '',
    oppRating: 0,
    combined: '',
    log: []
  };

  pageIterate = () => {
    let page = this.state.page + 1
    if (page > 6) {
      page = 0;
    }
    this.setState({
      page
    })
  }

  handleSubmitSubject = (e) => {

    e.preventDefault()
    const input = e.target.elements['subjectField'].value;
    this.pageIterate();
    this.setState({ subject: input })
    console.log(input);
  }

  handleSubmitUsers = (e) => {

    e.preventDefault()
    const input = e.target.elements['usersField'].value;
    const inputRating = e.target.elements['Rating'].value;
    this.pageIterate();
    this.setState({ usersPos: input })
    this.setState({ usersRating: inputRating })
    console.log(input);
  }

  handleSubmitOpps = (e) => {

    e.preventDefault()
    const input = e.target.elements['oppsField'].value;
    const inputRating = e.target.elements['Rating'].value;
    this.setState({ oppPos: input })
    this.setState({ oppRating: inputRating })
    //combined string for adding to clipboard
    const combined = `
    ◒ ${this.state.usersPos} ◟${this.state.usersRating}◞ 
    ◓
    ▲
    ◑ ${input} ◜${inputRating}◝ ◐  #${this.state.subject}
    #Tolero
    `
    this.pageIterate();
    this.setState({ combined: combined })
    console.log(input);
  }

  handleSubmitPre = (e) => {

    e.preventDefault()

    this.pageIterate();

  }


  handleBegin = (e) => {
    e.preventDefault()
    this.pageIterate();
  }

  handleToleroNavClick = (e) => {
    e.preventDefault()
    this.setState({ page: 0 })
  }

  handleLogNavClick = (e) => {
    // e.preventDefault()
    this.setState({ page: 6 })
  }

  copyToClipboard = (e) => {

    let target = document.getElementById('clipboard')
    target.select();
    console.log(target);

    document.execCommand("copy");

  }


  render() {

    return (
      <div>
        <Header tolero={this.handleToleroNavClick} log={this.handleLogNavClick} />
        { this.state.page > 0 && <Animate page={this.state.page} />}
        { this.state.page === 0 && <>
          <Description />
          <Animate page={this.state.page} />
          <Landing beginButton={this.handleBegin} /> </>}
        { this.state.page === 1 && <Form page={this.state.page} handleSubmit={this.handleSubmitSubject} />}
        { this.state.page === 2 && <Form1 page={this.state.page} handleSubmit={this.handleSubmitUsers} />}
        { this.state.page === 3 && <Form2 page={this.state.page} handleSubmit={this.handleSubmitOpps} />}
        { this.state.page === 4 && <Prebiner handleSubmit={this.handleSubmitPre} />}
        { this.state.page === 5 && <Combiner subject={this.state.subject} usersPos={this.state.usersPos}
          usersRating={this.state.usersRating} oppPos={this.state.oppPos} oppRating={this.state.oppRating}
          combined={this.state.combined} CopyToClipboard={this.copyToClipboard} goToLog={this.handleLogNavClick} />}
        { this.state.page === 6 && <Log log={this.state.log} updateLog={this.updateLog} />}

      </div>

    );
  }
}

export default App;



