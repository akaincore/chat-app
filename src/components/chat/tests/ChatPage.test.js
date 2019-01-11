/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatPage from '../ChatPage';

jest.mock('../Chat', () => () => '');
jest.mock('../../layout/sidebar/SideBar', () => () => 'SideBar');
jest.mock('../../layout/header/Header', () => () => 'Header');
jest.mock('../../common/ErrorTip', () => () => 'ErrorTip');
jest.mock('../../common/PaperTip', () => () => 'PaperTip');

const mockProps = {
  match: {
    params: { foo: 'bar' },
  },
  fetchAllChats: jest.fn(),
  fetchMyChats: jest.fn(),
  socketsConnect: jest.fn(),
  setActiveChat: jest.fn(),
  mountChat: jest.fn(),
  unmountChat: jest.fn(),
  chats: [],
  activeChat: {
    _id: '12345',
    creator: {
      username: 'user',
    },
    title: 'baz',
  },
  myChats: [],
  messages: [],
  createChat: jest.fn(),
  deleteChat: jest.fn(),
  isAuthenticated: true,
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  updateUser: jest.fn(),
  sendMessage: jest.fn(),
  joinChat: jest.fn(),
  leaveChat: jest.fn(),
  logout: jest.fn(),
  error: null,
  isConnected: false,
};

// not implemented in jsdom https://github.com/jsdom/jsdom/issues/1695
window.HTMLElement.prototype.scrollIntoView = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatPage {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
