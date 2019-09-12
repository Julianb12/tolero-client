import React, { Component } from 'react'
import './Info.css'


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
class Info extends Component {
  

  static defaultProps = {
    sections: []
  };
  
  state = {
    activeSectionIndex: null,
  }
  
  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex })
  }
  
  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className='Accordion__item' key={idx}>
        <button
          type='button'
          onClick={() => this.handleSetActiveSecion(idx)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }
  
  render() {

      const { activeSectionIndex } = this.state
      // const { sections } = this.sections
      return (
        <ul className='Accordion'>
          {sections.map((section, idx) =>
            this.renderItem(section, idx, activeSectionIndex)
          )}
        </ul>
      )

  }
  }
  
  export default Info;
  
//   render() {
//     // let coll = document.getElementsByClassName("collapsible");
//     // let i;
    
//     // for (i = 0; i < coll.length; i++) {
//     //   coll[i].addEventListener("click", function() {
//     //     this.classList.toggle("active");
//     //     var content = this.nextElementSibling;
//     //     if (content.style.display === "block") {
//     //       content.style.display = "none";
//     //     } else {
//     //       content.style.display = "block";
//     //     }
//     //   });
//     // }
//     const showInfo = () => {
//       'klad kfkjsd flkaj sdfa'
//     }

//     return (
//       <div>

//         <p>A Collapsible:</p>
//         <button class="collapsible" onClick={this.showInfo}>Open Collapsible</button>
//         <div class="content">
//         <p>${showInfo}</p>
//         </div>

//       </div>

//     )
//   }
// }

// export default Info;


























