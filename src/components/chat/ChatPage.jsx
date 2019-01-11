import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../layout/sidebar/SideBar';
import Header from '../layout/header/Header';
import Chat from './Chat';
import PaperTip from '../common/PaperTip';
import ErrorTip from '../common/ErrorTip';

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
  }
});

class ChatPage extends React.Component {

  componentDidMount() {
    const {
      match,
      fetchAllChats,
      fetchMyChats,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ]).then(() => {
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
      match: { params }, setActiveChat,
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
          {activeChat &&
          <Chat
            messages={messages}
            activeChat={activeChat}
            currentUser={currentUser}
            sendMessage={sendMessage}
            joinChat={joinChat}
            isConnected={isConnected}
          />
          }
          {!activeChat &&
          <PaperTip
            message={'Select chat to start messaging'}
          />
          }
        </div>
        <ErrorTip error={error} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
