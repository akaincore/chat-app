import { combineReducers } from 'redux';
import auth from './auth';
import chats from './chats';
import messages from './messages';
import services from './services';

const rootReducer = combineReducers({
  auth,
  chats,
  messages,
  services,
});

export default rootReducer;

export const getCurrentUser = state => state.auth.user;

export const isCreator = (state, chat) => {
  try {
    return chat.creator._id === getCurrentUser(state)._id;
  } catch (e) {
    return false;
  }
};

export const isMember = (state, chat) => {
  try {
    return chat.members.some(member => member._id === getCurrentUser(state)._id);
  } catch (e) {
    return false;
  }
};

export const isChatMember = (state, chat) => isCreator(state, chat) || isMember(state, chat);
