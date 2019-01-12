export const loginSuccessResponse = {
  success: true,
  token: 'jwtstring',
  user: {
    _id: '12345',
    username: 'foo',
    firstName: 'bar',
    lastName: 'baz',
    chats: [],
    messagesCount: 0,
  },
};

export const serverErrorResponse = {
  success: false,
  message: 'Expected error occurred',
};

export const loginNoTokenResponse = {
  success: true,
};

export const initialUnauthorizedState = {
  services: {
    isFetching: {
      login: false,
      logout: false,
      signup: false,
      receiveAuth: false,
    },
  },
  auth: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
};

export const initialAuthenticatedState = {
  services: {
    isFetching: {
      login: false,
      logout: false,
      signup: false,
      receiveAuth: false,
    },
  },
  auth: {
    isAuthenticated: true,
    user: {
      username: 'foo',
      firstName: 'bar',
      lastName: 'baz',
      chats: [],
      messagesCount: 0,
    },
    token: 'jwtstring',
  },
};

export const logoutSuccessResponse = {
  success: true,
  message: 'You are now logged out',
};
