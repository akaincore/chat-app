/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

jest.mock('../ChatMenu', () => () => 'ChatMenu');
jest.mock('../ProfileMenu', () => () => 'ProfileMenu');

const mockProps = {
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  logout: jest.fn(),
  updateUser: jest.fn(),
  deleteChat: jest.fn(),
  leaveChat: jest.fn(),
  isAuthenticated: false,
  isConnected: false,
  activeChat: {
    _id: '12345',
    creator: { username: 'joe' },
    title: 'foo',
  },
};

describe('<Header />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
