/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import AddChatModal from '../AddChatModal';

const mockProps = {
  modalOpen: false,
  handleModalClose: jest.fn(),
  title: 'title',
  onTitleChange: jest.fn(),
  handleCreateChat: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddChatModal {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
