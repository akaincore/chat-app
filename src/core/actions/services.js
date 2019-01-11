import history from '../utils/history';
import * as types from './types';

// eslint-disable-next-line
export const redirect = to => (dispatch) => {
  history.push(to);
  dispatch({
    type: types.REDIRECT,
    payload: { to },
  });
};
