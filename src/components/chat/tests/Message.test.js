/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Message from '../Message';

jest.mock('../../common/ChatAvatar', () => () => 'ChatAvatar');

jest.mock('moment', () => () => ({ fromNow: () => '11 days ago' }));

const mockProps = {
  sender: {
    _id: '12345',
    username: 'me',
  },
  content: '',
  currentUser: {
    username: 'user',
    isMember: false,
    isChatMember: false,
    isCreator: false,
  },
  statusMessage: false,
  createdAt: '2019-01-01T00:00:00.000Z',
};

describe('<Message />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Message {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Message {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
