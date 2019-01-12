/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ChatListItem from '../ChatListItem';

jest.mock('../../../common/ChatAvatar', () => () => 'ChatAvatar');
jest.mock('moment', () => () => ({ fromNow: () => '11 days ago' }));

const mockProps = {
  chatId: '12345',
  selected: false,
  title: 'foo',
  createdAt: '2019-01-01T00:00:00.000Z',
};

describe('<ChatListItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatListItem {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ChatListItem {...mockProps} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
