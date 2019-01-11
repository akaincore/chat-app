/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

jest.mock('../ChatMenu', () => () => 'ChatMenu');
jest.mock('../ProfileMenu', () => () => 'ProfileMenu');

const mockProps = {
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  logout: jest.fn(),
  updateUser: jest.fn(),
  deleteChat: jest.fn(),
  leaveChat: jest.fn(),
  isAuthenticated: false,
  isConnected: false,
  activeChat: {
    _id: '12345',
    creator: { username: 'joe' },
    title: 'foo',
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
