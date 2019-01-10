import * as types from './types';
import api from '../utils/api';
import { redirect } from './services';

export const fetchMyChats = () => {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_MY_CHATS_PENDING,
    });
    return api('/chats/my', token)
      .then(data => dispatch({
        type: types.FETCH_MY_CHATS_SUCCESS,
        payload: data
      }))
      .catch(reason => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: reason,
      }));
  };
};

export const fetchAllChats = () => {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_MY_CHATS_PENDING,
    });
    return api('/chats', token)
      .then(data => dispatch({
        type: types.FETCH_ALL_CHATS_SUCCESS,
        payload: data
      }))
      .catch(reason => dispatch({
        type: types.FETCH_ALL_CHATS_FAILURE,
        payload: reason,
      }));
  };
};

export const fetchChat = (id) => {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_CHAT_PENDING,
    });
    return api(`/chats/${id}`, token)
      .then(data => {
        dispatch({
          type: types.FETCH_CHAT_SUCCESS,
          payload: data
        });
        return data;
      })
      .catch(reason => dispatch({
        type: types.FETCH_CHAT_FAILURE,
        payload: reason,
      }));
  };
};

export const setActiveChat = (id) => {
  return (dispatch) => {
    return dispatch(fetchChat(id))
      .then(data => {
        if (!data) {
          dispatch(redirect('/chat'));
          return dispatch({
            type: types.UNSET_ACTIVE_CHAT,
          });
        }
        dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data,
        });
      });
  };
};
