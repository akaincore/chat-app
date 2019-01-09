import * as types from '../actions/action-types';

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token: token,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_PENDING: {
      return state;
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    }
    case types.SIGNUP_PENDING: {
      return state;
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case types.SIGNUP_FAILURE: {
      return { ...state };
    }
    case types.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
