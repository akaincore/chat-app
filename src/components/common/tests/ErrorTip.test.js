/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorTip from '../ErrorTip';

const mockProps = {
  error: null,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorTip {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
