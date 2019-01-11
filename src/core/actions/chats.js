import * as types from './types';
import api from '../utils/api';
import { redirect } from './services';

export const fetchMyChats = () => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.myChats) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.FETCH_MY_CHATS_PENDING,
  });
  return api('/chats/my', token)
    .then(data => dispatch({
        type: types.FETCH_MY_CHATS_SUCCESS,
        payload: data,
      }))
    .catch(reason => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: reason,
      }));
};

export const fetchAllChats = () => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.allChats) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.FETCH_ALL_CHATS_PENDING,
  });
  return api('/chats', token)
    .then(data => dispatch({
        type: types.FETCH_ALL_CHATS_SUCCESS,
        payload: data,
      }))
    .catch(reason => dispatch({
        type: types.FETCH_ALL_CHATS_FAILURE,
        payload: reason,
      }));
};

export const fetchChat = id => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.chat) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.FETCH_CHAT_PENDING,
  });
  return api(`/chats/${id}`, token)
    .then(data => {
      dispatch({
        type: types.FETCH_CHAT_SUCCESS,
        payload: data,
      });
      return data;
    })
    .catch(reason => {
      dispatch({
        type: types.FETCH_CHAT_FAILURE,
        payload: reason,
      });
      dispatch(redirect('/chat'));
    });
};

export const setActiveChat = id => dispatch => dispatch(fetchChat(id)).then(data => {
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
    dispatch(redirect(`/chat/${data.chat._id}`));
    return data;
  });

export const createChat = title => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.createChat) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.CREATE_CHAT_PENDING,
    payload: { title },
  });
  return api('/chats', token, { method: 'POST' }, { data: { title } })
    .then(data => {
      dispatch({
        type: types.CREATE_CHAT_SUCCESS,
        payload: data,
      });
      return data;
    })
    .then(data => dispatch(setActiveChat(data.chat._id)))
    .catch(reason => dispatch({
        type: types.CREATE_CHAT_FAILURE,
        payload: reason,
      }));
};

export const deleteChat = id => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.deleteChat) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.DELETE_CHAT_PENDING,
    payload: { id },
  });
  return api(`/chats/${id}`, token, { method: 'DELETE' })
    .then(data => {
      dispatch({
        type: types.DELETE_CHAT_SUCCESS,
        payload: data,
      });
      dispatch({
        type: types.UNSET_ACTIVE_CHAT,
      });
      dispatch(redirect('/chat'));
      return data;
    })
    .catch(reason => dispatch({
        type: types.DELETE_CHAT_FAILURE,
        payload: reason,
      }));
};

export const joinChat = id => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.joinChat) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.JOIN_CHAT_PENDING,
    payload: { id },
  });
  return api(`/chats/${id}/join`, token)
    .then(({ chat }) => {
      dispatch({
        type: types.JOIN_CHAT_SUCCESS,
        payload: { chat },
      });
      return chat;
    })
    .catch(reason => dispatch({
        type: types.JOIN_CHAT_FAILURE,
        payload: reason,
      }));
};

export const leaveChat = id => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.leaveChat) {
    return Promise.resolve();
  }

  const { token } = getState().auth;
  dispatch({
    type: types.LEAVE_CHAT_PENDING,
    payload: { id },
  });
  return api(`/chats/${id}/leave`, token)
    .then(({ chat }) => {
      dispatch({
        type: types.LEAVE_CHAT_SUCCESS,
        payload: { chat },
      });
      dispatch({
        type: types.UNSET_ACTIVE_CHAT,
      });
      dispatch(redirect('/chat'));
      return chat;
    })
    .catch(reason => dispatch({
        type: types.LEAVE_CHAT_FAILURE,
        payload: reason,
      }));
};
