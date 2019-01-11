/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessageInput from '../MessageInput';

const mockProps = {
  joinChat: jest.fn(),
  sendMessage: jest.fn(),
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  disabled: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageInput {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
