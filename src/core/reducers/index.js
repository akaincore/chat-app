import { combineReducers } from 'redux';
import auth from './auth';
import chats from './chats';


const rootReducer = combineReducers({
  auth,
  chats,
});

export default rootReducer;
