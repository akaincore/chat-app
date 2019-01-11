/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ProfileMenu from '../ProfileMenu';

const mockProps = {
  username: 'user',
  updateUser: jest.fn(),
  logout: jest.fn(),
  disabled: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
