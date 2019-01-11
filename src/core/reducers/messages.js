import * as types from '../actions/types';

const initialState = [];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_MESSAGE: {
      return [...state, action.payload.message];
    }
    case types.FETCH_CHAT_SUCCESS: {
      return action.payload.chat.messages;
    }
    default: {
      return state;
    }
  }
};

export default messages;
