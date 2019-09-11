import React, { Component } from 'react'
import './Info.css'

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
    const { sections } = this.props
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





// import React, { Component } from 'react';
// import './Info.css';


// class Info extends Component {
//   render() {
//     return (
//       <div className="Info">
//         <p> > More Info</p>
//       </div>
//     );
//   }
// }

// export default Info;