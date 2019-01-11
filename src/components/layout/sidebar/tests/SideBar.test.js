/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../SideBar';

jest.mock('../SearchInput', () => () => 'SearchInput');
jest.mock('../ChatList', () => () => 'ChatList');
jest.mock('../AddChat', () => () => 'AddChat');

const mockProps = {
  chats: [],
  myChats: [],
  activeChat: {
    _id: '12345',
    creator: {
      username: 'user',
    },
    title: 'foo',
  },
  isConnected: false,
  createChat: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBar {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
