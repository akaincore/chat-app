export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const authenticatedState = {
  isAuthenticated: true,
  user: {
    _id: '123456',
    username: 'foo',
    firstName: 'bar',
    lastName: 'baz',
    chats: [],
    messagesCount: 0,
  },
  token: 'jwtstring',
};

export const updateUserPayload = {
  success: true,
  message: 'message',
  user: {
    _id: '123456',
    username: 'foo',
    firstName: 'foo',
    lastName: 'foo',
  },
};

export const updatedAuthenticatedState = {
  isAuthenticated: true,
  user: {
    _id: '123456',
    username: 'foo',
    firstName: 'foo',
    lastName: 'foo',
    chats: [],
    messagesCount: 0,
  },
  token: 'jwtstring',
};

export const onlyTokenState = {
  token: 'jwtstring',
};

export const loginPayload = {
  success: true,
  message: 'message',
  user: {
    _id: '123456',
    username: 'foo',
    firstName: 'bar',
    lastName: 'baz',
    chats: [],
    messagesCount: 0,
  },
  token: 'jwtstring',
};

export const receiveAuthPayload = {
  success: true,
  message: 'message',
  user: {
    _id: '123456',
    username: 'foo',
    firstName: 'bar',
    lastName: 'baz',
    chats: [],
    messagesCount: 0,
  },
};
