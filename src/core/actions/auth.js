import * as types from './types';
import api from '../utils/api';

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_PENDING,
    });
    return api(
      '/login',
      null,
      { method: 'POST' },
      { username, password }
    )
      .then(json => {
        if (!json.token) {
          throw new Error('No token provided');
        }
        localStorage.setItem('token', json.token);
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: json,
        });
      })
      .catch(reason => dispatch({
        type: types.LOGIN_FAILURE,
        payload: reason
      }));
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.LOGOUT_PENDING
    });
    const { token } = getState().auth;
    if (!token) {
      dispatch({
        type: types.LOGOUT_FAILURE,
      });
    }
    return api(
      '/logout',
      token
    )
      .then(() => {
        localStorage.removeItem('token');
        dispatch({
          type: types.LOGOUT_SUCCESS,
        });
      })
      .catch(reason => dispatch({
        type: types.LOGOUT_FAILURE,
        payload: reason
      }));
  };
};

export const signup = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_PENDING,
    });
    return api(
      '/signup',
      null,
      { method: 'POST' },
      { username, password }
    )
      .then(json => {
        if (!json.token) {
          throw new Error('No token provided');
        }
        localStorage.setItem('token', json.token);
        dispatch({
          type: types.SIGNUP_SUCCESS,
          payload: json,
        });
      })
      .catch(reason => dispatch({
        type: types.SIGNUP_FAILURE,
        payload: reason
      }));
  };
};

export const receiveAuth = () => {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    if (!token) {
      dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
      });
    }
    return api(
      '/users/me',
      token
    )
      .then(json => dispatch({
        type: types.RECEIVE_AUTH_SUCCESS,
        payload: json,
      }))
      .catch(reason => dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
        payload: reason
      }));
  };
};
