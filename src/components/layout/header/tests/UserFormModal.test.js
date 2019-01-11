/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserFormModal from '../UserFormModal';

const mockProps = {
  userForm: { foo: 'bar' },
  onUserFieldChange: jest.fn(),
  handleModalClose: jest.fn(),
  handleUpdateUser: jest.fn(),
  modalOpen: false,
};

describe('<UserFormModal />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserFormModal {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<UserFormModal {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
