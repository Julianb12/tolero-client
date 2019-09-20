import React from 'react';
import ReactDOM from 'react-dom';
import Prebiner from './Prebiner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prebiner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
