/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageInput from '../MessageInput';

const mockProps = {
  joinChat: jest.fn(),
  sendMessage: jest.fn(),
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  disabled: false,
};

describe('<MessageInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageInput {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<MessageInput {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
