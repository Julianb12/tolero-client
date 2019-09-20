import React, { Component } from 'react'
import './Info.css'

class Info extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     content: false
  //   }
  //   this.showContent = this.showContent.bind(this)
  // }
  
  state = {
    content: false
  }


  showContent = () => {
    console.log('here')
    this.setState({content: !this.state.content})
    console.log(this.state.content)
  }


  render() {

    return(
      <div>
        <button className="info-button" onClick={this.showContent}>Info</button>
        { this.state.content === true && this.props.page === 1 && <p>Choose the issue or subject you want to discuss.</p> }
        { this.state.content === true && this.props.page === 2 && <p>Enter your opinion of the subject and select how strongly you feel about it from the dropdown menu (1-5).</p> }
        { this.state.content === true && this.props.page === 3 && <p>Enter an opposing opinion to your own and select how strongly you agree with it.</p> }
      </div>
    )
  }
}

export default Info;





// const sections = [
//   {
//     title: 'More info',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   // {
//   //   title: 'Section 2',
//   //   content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   // },
//   // {
//   //   title: 'Section 3',
//   //   content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   // },
// ]
// class Info extends Component {

//   static defaultProps = {
//     sections: []
//   };
  
//   state = {
//     activeSectionIndex: null,
//   }
  
//   handleSetActiveSecion = (sectionIndex) => {
//     this.setState({ activeSectionIndex: sectionIndex })
//   }
  
//   renderItem(section, idx, activeSectionIndex) {
//     return (
//       <li className='Accordion__item' key={idx}>
//         <button
//           type='button'
//           onClick={() => this.handleSetActiveSecion(idx)}
//         >
//           {section.title}
//         </button>
//         {(activeSectionIndex === idx) && <p>{section.content}</p>}
//       </li>
//     )
//   }
  
//   render() {

//       const { activeSectionIndex } = this.state
//       // const { sections } = this.sections
//       return (
//         <ul className='Accordion'>
//           {sections.map((section, idx) =>
//             this.renderItem(section, idx, activeSectionIndex)
//           )}
//         </ul>
//       )

//   }
//   }
  
//   export default Info;
  
