import React from 'react';
import ReactDOM from 'react-dom';
import Done from './Done';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Done />, div);
  ReactDOM.unmountComponentAtNode(div);
});
