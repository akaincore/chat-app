/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import AddChat from '../AddChat';

jest.mock('../../../chat/AddChatModal', () => () => 'AddChatModal');

const mockProps = {
  handleModalClose: jest.fn(),
  onTitleChange: jest.fn(),
  handleCreateChat: jest.fn(),
  handleModalOpen: jest.fn(),
  modalOpen: false,
  disabled: false,
  title: 'foo',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddChat {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
