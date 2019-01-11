/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatList from '../ChatList';

jest.mock('../ChatListItem', () => () => 'ChatListItem');

const mockProps = {
  chats: [],
  disabled: false,
  activeChat: {
    _id: '12345',
    creator: {
      username: 'user',
    },
    title: 'foo',
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatList {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
