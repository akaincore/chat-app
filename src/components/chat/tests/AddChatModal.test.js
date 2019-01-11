/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AddChatModal from '../AddChatModal';

const mockProps = {
  modalOpen: false,
  handleModalClose: jest.fn(),
  title: 'title',
  onTitleChange: jest.fn(),
  handleCreateChat: jest.fn(),
};

describe('<AddChatModal />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddChatModal {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AddChatModal {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
