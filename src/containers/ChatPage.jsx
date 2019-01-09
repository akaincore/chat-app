import { connect } from 'react-redux';
import ChatPage from '../components/chat/ChatPage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
