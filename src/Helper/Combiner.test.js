import React from 'react';
import ReactDOM from 'react-dom';
import Combiner from './Combiner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Combiner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
