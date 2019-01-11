/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from '../ChatList';

jest.mock('../ChatListItem', () => () => 'ChatListItem');

const mockProps = {
  chats: [],
  disabled: false,
  activeChat: {
    _id: '12345',
    creator: {
      username: 'user',
    },
    title: 'foo',
  },
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatList {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
