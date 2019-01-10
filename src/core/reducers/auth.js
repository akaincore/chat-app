import * as types from '../actions/types';

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  token: token,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    }
    case types.RECEIVE_AUTH_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      }
    }
    case types.LOGOUT_SUCCESS:
    case types.SIGNUP_FAILURE:
    case types.RECEIVE_AUTH_FAILURE:
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    }
    case types.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default auth;
