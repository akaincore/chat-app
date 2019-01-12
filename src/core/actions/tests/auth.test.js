/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as types from '../types';
import * as actions from '../auth';
import * as mocks from './auth-mocks';
import config from '../../../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  /*
   * Login tests
   */

  it('creates LOGIN_SUCCESS when fetching login has been done successfully', () => {
    const uri = '/login';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.postOnce(url, mocks.loginSuccessResponse);

    const expectedActions = [
      { type: types.LOGIN_PENDING },
      {
        type: types.LOGIN_SUCCESS,
        payload: mocks.loginSuccessResponse,
      },
    ];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.login('foo', 'bar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_FAILURE when server answered with status success:false', () => {
    const uri = '/login';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.postOnce(url, mocks.serverErrorResponse);
    const expectedError = new Error(mocks.serverErrorResponse.message);
    const expectedActions = [
      { type: types.LOGIN_PENDING },
      {
        type: types.LOGIN_FAILURE,
        payload: expectedError,
      },
    ];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.login('foo', 'bar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_FAILURE when response has no token', () => {
    const uri = '/login';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.postOnce(url, mocks.loginNoTokenResponse);
    const expectedError = new Error('No token provided');
    const expectedActions = [
      { type: types.LOGIN_PENDING },
      {
        type: types.LOGIN_FAILURE,
        payload: expectedError,
      },
    ];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.login('foo', 'bar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  /*
   * Signup tests
   */

  it('creates SIGNUP_SUCCESS when fetching signup has been done successfully', () => {
    const uri = '/signup';
    const url = `${config.API_URI}/${uri}`;
    // signup and login has same success responses, use already mocked loginSuccessResponse
    fetchMock.postOnce(url, mocks.loginSuccessResponse);
    const expectedActions = [
      { type: types.SIGNUP_PENDING },
      {
        type: types.SIGNUP_SUCCESS,
        payload: mocks.loginSuccessResponse,
      },
    ];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.signup('foo', 'bar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SIGNUP_FAILURE when server answered with status success:false', () => {
    const uri = '/signup';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.postOnce(url, mocks.serverErrorResponse);
    const expectedError = new Error(mocks.serverErrorResponse.message);
    const expectedActions = [
      { type: types.SIGNUP_PENDING },
      {
        type: types.SIGNUP_FAILURE,
        payload: expectedError,
      },
    ];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.signup('foo', 'bar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SIGNUP_FAILURE when response has no token', () => {
    const uri = '/signup';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.postOnce(url, mocks.loginNoTokenResponse);
    const expectedError = new Error('No token provided');
    const expectedActions = [
      { type: types.SIGNUP_PENDING },
      {
        type: types.SIGNUP_FAILURE,
        payload: expectedError,
      },
    ];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.signup('foo', 'bar')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  /*
   * Logout tests
   */

  it('creates LOGOUT_SUCCESS when fetching logout has been done successfully', () => {
    const uri = '/logout';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.getOnce(url, mocks.logoutSuccessResponse);
    const expectedActions = [{ type: types.LOGOUT_PENDING }, { type: types.LOGOUT_SUCCESS }];
    const store = mockStore(mocks.initialAuthenticatedState);

    return store.dispatch(actions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGOUT_FAILURE when server answered with status success:false', () => {
    const uri = '/logout';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.getOnce(url, mocks.serverErrorResponse);
    const expectedError = new Error(mocks.serverErrorResponse.message);
    const expectedActions = [
      { type: types.LOGOUT_PENDING },
      {
        type: types.LOGOUT_FAILURE,
        payload: expectedError,
      },
    ];
    const store = mockStore(mocks.initialAuthenticatedState);

    return store.dispatch(actions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  /*
   * Receive auth tests
   */

  it('creates RECEIVE_AUTH_SUCCESS when fetching receiveAuth has been done successfully', () => {
    const uri = '/users/me';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.getOnce(url, mocks.loginSuccessResponse);
    const expectedActions = [
      { type: types.RECEIVE_AUTH_PENDING },
      {
        type: types.RECEIVE_AUTH_SUCCESS,
        payload: mocks.loginSuccessResponse,
      },
    ];
    const store = mockStore(mocks.initialAuthenticatedState);

    return store.dispatch(actions.receiveAuth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RECEIVE_AUTH_FAILURE when server answered with status success:false', () => {
    const uri = '/users/me';
    const url = `${config.API_URI}/${uri}`;
    fetchMock.getOnce(url, mocks.serverErrorResponse);
    const expectedError = new Error(mocks.serverErrorResponse.message);
    const expectedActions = [
      { type: types.RECEIVE_AUTH_PENDING },
      {
        type: types.RECEIVE_AUTH_FAILURE,
        payload: expectedError,
      },
    ];
    const store = mockStore(mocks.initialAuthenticatedState);

    return store.dispatch(actions.receiveAuth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RECEIVE_AUTH_FAILURE when state has no token', () => {
    const expectedActions = [{ type: types.RECEIVE_AUTH_FAILURE }];
    const store = mockStore(mocks.initialUnauthorizedState);

    return store.dispatch(actions.receiveAuth()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
