/* eslint no-use-before-define: 0 */
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = {
  activeId: null,
  allIds: [],
  myIds: [],
  byIds: {},
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.JOIN_CHAT_SUCCESS:
    case types.SET_ACTIVE_CHAT: {
      return action.payload.chat._id;
    }
    case types.DELETE_CHAT_SUCCESS:
    case types.UNSET_ACTIVE_CHAT: {
      return null;
    }
    case types.RECEIVE_DELETED_CHAT: {
      return state === action.payload.chat._id ? null : state;
    }
    default: {
      return state;
    }
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS: {
      return action.payload.chats.map(getChatId);
    }
    case types.RECEIVE_NEW_CHAT:
    case types.CREATE_CHAT_SUCCESS: {
      return [...state, action.payload.chat._id];
    }
    case types.RECEIVE_DELETED_CHAT:
    case types.DELETE_CHAT_SUCCESS: {
      return state.filter(id => id !== action.payload.chat._id);
    }
    default: {
      return state;
    }
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS: {
      return action.payload.chats.map(getChatId);
    }
    case types.JOIN_CHAT_SUCCESS:
    case types.CREATE_CHAT_SUCCESS: {
      return [...state, action.payload.chat._id];
    }
    case types.DELETE_CHAT_SUCCESS:
    case types.RECEIVE_DELETED_CHAT:
    case types.LEAVE_CHAT_SUCCESS: {
      return state.filter(id => id !== action.payload.chat._id);
    }
    default: {
      return state;
    }
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
    case types.FETCH_ALL_CHATS_SUCCESS: {
      return {
        ...state,
        ...action.payload.chats.reduce(
          (ids, chat) => ({
            ...ids,
            [chat._id]: chat,
          }),
          {},
        ),
      };
    }
    case types.SET_ACTIVE_CHAT: {
      return {
        ...state,
        [action.payload.chat._id]: action.payload.chat,
      };
    }
    case types.JOIN_CHAT_SUCCESS:
    case types.LEAVE_CHAT_SUCCESS:
    case types.RECEIVE_NEW_CHAT:
    case types.CREATE_CHAT_SUCCESS: {
      return {
        ...state,
        [action.payload.chat._id]: action.payload.chat,
      };
    }
    case types.RECEIVE_DELETED_CHAT:
    case types.DELETE_CHAT_SUCCESS: {
      const newState = { ...state };
      delete newState[action.payload.chat._id];
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,
});

export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
export const getChatById = (state, id) => state.byIds[id];
