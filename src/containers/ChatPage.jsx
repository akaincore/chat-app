import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatPage from '../components/chat/ChatPage';
import { logout, fetchAllChats, fetchMyChats, setActiveChat } from '../core/actions';
import * as fromChats from '../core/reducers/chats';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  chats: fromChats.getByIds(state.chats, state.chats.allIds),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
