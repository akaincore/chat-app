/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

describe('<AddChat />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddChat {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AddChat {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
