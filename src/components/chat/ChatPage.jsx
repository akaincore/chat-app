import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../layout/sidebar/SideBar';
import Header from '../layout/header/Header';
import Chat from './Chat';
import PaperTip from '../common/PaperTip';
import ErrorTip from '../common/ErrorTip';
import Message from '../../types/Message';
import CurrentUser from '../../types/CurrentUser';
import ChatShape from '../../types/Chat';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowY: 'hidden',
  },
});

class ChatPage extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    fetchAllChats: PropTypes.func.isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    unmountChat: PropTypes.func.isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape(ChatShape)).isRequired,
    activeChat: PropTypes.shape(ChatShape),
    myChats: PropTypes.arrayOf(PropTypes.shape(ChatShape)).isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape(Message)).isRequired,
    createChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    currentUser: PropTypes.shape(CurrentUser).isRequired,
    updateUser: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    error: null,
    activeChat: null,
  };

  componentDidMount() {
    const {
      match,
      fetchAllChats,
      fetchMyChats,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;
    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { id } = match.params;
        if (id) {
          setActiveChat(id);
          mountChat(id);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
      mountChat,
      unmountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;
    if (nextParams.id && params.id !== nextParams.id) {
      setActiveChat(nextParams.id);
      unmountChat(params.id);
      mountChat(nextParams.id);
    }
  }

  render() {
    const {
      classes,
      chats,
      activeChat,
      messages,
      myChats,
      createChat,
      deleteChat,
      isAuthenticated,
      currentUser,
      updateUser,
      sendMessage,
      joinChat,
      leaveChat,
      logout,
      error,
      isConnected,
    } = this.props;
    return (
      <div className={classes.container}>
        <SideBar
          chats={chats}
          activeChat={activeChat}
          myChats={myChats}
          createChat={createChat}
          isConnected={isConnected}
        />
        <div className={classes.contentWrapper}>
          <Header
            logout={logout}
            isAuthenticated={isAuthenticated}
            activeChat={activeChat}
            currentUser={currentUser}
            updateUser={updateUser}
            deleteChat={deleteChat}
            leaveChat={leaveChat}
            isConnected={isConnected}
          />
          {activeChat && (
            <Chat
              messages={messages}
              activeChat={activeChat}
              currentUser={currentUser}
              sendMessage={sendMessage}
              joinChat={joinChat}
              isConnected={isConnected}
            />
          )}
          {!activeChat && <PaperTip message="Select chat to start messaging" />}
        </div>
        <ErrorTip error={error} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
