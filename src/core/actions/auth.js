import fetch from 'isomorphic-fetch';
import * as types from './action-types';

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_PENDING,
    });
    let url = 'http://10.102.100.176:9999/v1/login';
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
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
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_PENDING
    });
  };
};

export const signup = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_PENDING,
    });
    let url = 'http://10.102.100.176:9999/v1/signup';
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.success) {
          return json;
        }
        throw new Error(json.message);
      })
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
