import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatPage from '../components/chat/ChatPage';
import {
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  updateUser,
  createChat
} from '../core/actions';
import * as fromChats from '../core/reducers/chats';
import * as fromAuth from '../core/reducers/auth';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  chats: fromChats.getByIds(state.chats, state.chats.allIds),
  myChats: fromChats.getByIds(state.chats, state.chats.myIds),
  activeChat: fromChats.getChatById(state.chats, state.chats.activeId),
  currentUser: fromAuth.getCurrentUser(state.auth),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  updateUser,
  createChat,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
