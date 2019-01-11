/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatMenu from '../ChatMenu';

const mockProps = {
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  disabled: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
