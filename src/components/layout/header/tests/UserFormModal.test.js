/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import UserFormModal from '../UserFormModal';

const mockProps = {
  userForm: { foo: 'bar' },
  onUserFieldChange: jest.fn(),
  handleModalClose: jest.fn(),
  handleUpdateUser: jest.fn(),
  modalOpen: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserFormModal {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
