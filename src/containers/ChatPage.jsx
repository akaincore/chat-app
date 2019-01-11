import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatPage from '../components/chat/ChatPage';
import {
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  joinChat,
  leaveChat,
  updateUser,
  createChat,
  deleteChat,
  sendMessage,
  mountChat,
  unmountChat,
  socketsConnect,
} from '../core/actions';
import * as fromChats from '../core/reducers/chats';
import * as fromState from '../core/reducers';

const mapStateToProps = state => {
  const activeChat = fromChats.getChatById(state.chats, state.chats.activeId);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    chats: fromChats.getByIds(state.chats, state.chats.allIds),
    myChats: fromChats.getByIds(state.chats, state.chats.myIds),
    activeChat,
    currentUser: {
      ...state.auth.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatMember: fromState.isChatMember(state, activeChat),
    },
    messages: state.messages,
    error: state.services.errors.chat,
    isConnected: state.services.isConnected,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  updateUser,
  createChat,
  deleteChat,
  sendMessage,
  joinChat,
  leaveChat,
  mountChat,
  unmountChat,
  socketsConnect,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
