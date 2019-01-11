/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatAvatar from '../ChatAvatar';

const mockProps = {
  title: 'foo',
  id: '12345',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatAvatar {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
