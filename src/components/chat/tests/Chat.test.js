/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Chat from '../Chat';

const mockProps = {
  messages: [],
  sendMessage: jest.fn(),
  joinChat: jest.fn(),
  activeChat: {
    _id: '12345',
    creator: {
      username: 'user',
    },
    title: 'foo',
  },
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  isConnected: false,
};

// not implemented in jsdom https://github.com/jsdom/jsdom/issues/1695
window.HTMLElement.prototype.scrollIntoView = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chat {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
