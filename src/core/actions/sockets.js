import SocketIOClient from 'socket.io-client';
import * as types from './types';
import { redirect } from './services';
import config from '../../config';

export const missingSocketConnection = () => ({
  type: types.SOCKETS_CONNECTION_MISSING,
  payload: new Error('Missing connection'),
});

let socket = null;

export const socketsConnect = () => (dispatch, getState) => {
  const { isFetching } = getState().services;
  if (isFetching.sockets) {
    return Promise.resolve();
  }

  dispatch({
    type: types.SOCKETS_CONNECTION_PENDING,
  });
  const { token } = getState().auth;
  socket = SocketIOClient(config.SOCKETS_URI, {
    query: { token },
  });
  // common socket events
  socket.on('connect', () => {
    dispatch({
      type: types.SOCKETS_CONNECTION_SUCCESS,
    });
  });
  socket.on('error', error => {
    dispatch({
      type: types.SOCKETS_CONNECTION_FAILURE,
      payload: new Error(`Connection: ${error}`),
    });
  });
  socket.on('connect_error', () => {
    dispatch({
      type: types.SOCKETS_CONNECTION_FAILURE,
      payload: new Error('Connection with server lost'),
    });
  });
  socket.on('connection_error', () => {
    dispatch({
      type: types.SOCKETS_CONNECTION_FAILURE,
    });
  });
  // emitted by server
  socket.on('new-message', message => {
    dispatch({
      type: types.RECEIVE_MESSAGE,
      payload: message,
    });
  });
  socket.on('new-chat', ({ chat }) => {
    dispatch({
      type: types.RECEIVE_NEW_CHAT,
      payload: { chat },
    });
  });
  socket.on('deleted-chat', ({ chat }) => {
    const { activeId } = getState().chats;
    dispatch({
      type: types.RECEIVE_DELETED_CHAT,
      payload: { chat },
    });
    if (activeId === chat._id) {
      dispatch(redirect('/chat'));
    }
  });
  return Promise.resolve();
};

export const sendMessage = content => (dispatch, getState) => {
  const { activeId } = getState().chats;
  if (!socket) {
    dispatch(missingSocketConnection());
  }
  socket.emit(
    'send-message',
    {
      chatId: activeId,
      content,
    },
    () => {
      dispatch({
        type: types.SEND_MESSAGE,
        payload: {
          chatId: activeId,
          content,
        },
      });
    },
  );
};

export const mountChat = chatId => dispatch => {
  if (!socket) {
    dispatch(missingSocketConnection());
  }
  socket.emit('mount-chat', chatId);
  dispatch({
    type: types.MOUNT_CHAT,
    payload: { chatId },
  });
};

export const unmountChat = chatId => dispatch => {
  if (!socket) {
    dispatch(missingSocketConnection());
  }
  socket.emit('unmount-chat', chatId);
  dispatch({
    type: types.UNMOUNT_CHAT,
    payload: { chatId },
  });
};
