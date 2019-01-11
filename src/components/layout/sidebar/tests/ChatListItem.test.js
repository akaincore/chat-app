/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ChatListItem from '../ChatListItem';

jest.mock('../../../common/ChatAvatar', () => () => 'ChatAvatar');

const mockProps = {
  chatId: '12345',
  selected: false,
  title: 'foo',
  createdAt: '2019-01-01T00:00:00.000Z',
};

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
