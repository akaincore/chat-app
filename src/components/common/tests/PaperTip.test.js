/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import PaperTip from '../PaperTip';

const mockProps = {
  message: '',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaperTip {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
