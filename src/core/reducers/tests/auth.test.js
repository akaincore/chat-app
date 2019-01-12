/* eslint-env jest */
import * as types from '../../actions/types/auth';
import * as mocks from './auth-mocks';
import auth from '../auth';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual(mocks.initialState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      auth(undefined, {
        type: types.LOGIN_SUCCESS,
        payload: mocks.loginPayload,
      }),
    ).toEqual(mocks.authenticatedState);
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(
      auth(undefined, {
        type: types.SIGNUP_SUCCESS,
        payload: mocks.loginPayload,
      }),
    ).toEqual(mocks.authenticatedState);
  });

  it('should handle RECEIVE_AUTH_SUCCESS', () => {
    expect(
      auth(mocks.onlyTokenState, {
        type: types.RECEIVE_AUTH_SUCCESS,
        payload: mocks.receiveAuthPayload,
      }),
    ).toEqual(mocks.authenticatedState);
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      auth(undefined, {
        type: types.LOGOUT_SUCCESS,
      }),
    ).toEqual(mocks.initialState);
  });

  it('should handle SIGNUP_FAILURE', () => {
    expect(
      auth(undefined, {
        type: types.SIGNUP_FAILURE,
      }),
    ).toEqual(mocks.initialState);
  });

  it('should handle RECEIVE_AUTH_FAILURE', () => {
    expect(
      auth(undefined, {
        type: types.RECEIVE_AUTH_FAILURE,
      }),
    ).toEqual(mocks.initialState);
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(
      auth(undefined, {
        type: types.LOGIN_FAILURE,
      }),
    ).toEqual(mocks.initialState);
  });

  it('should handle UPDATE_USER_SUCCESS', () => {
    expect(
      auth(mocks.authenticatedState, {
        type: types.UPDATE_USER_SUCCESS,
        payload: mocks.updateUserPayload,
      }),
    ).toEqual(mocks.updatedAuthenticatedState);
  });
});
