import history from '../utils/history';
import * as types from './types';

export const redirect = (to) => {
  return (dispatch) => {
    history.push(to);
    dispatch({
      type: types.REDIRECT,
      payload: { to },
    });
  }
};
