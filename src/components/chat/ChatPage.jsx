import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../layout/sidebar/SideBar';
import Header from '../layout/header/Header';
import Chat from './Chat';
import PaperTip from '../common/PaperTip';

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
      setActiveChat,
      fetchMyChats
    } = this.props;
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        const { chatId } = match.params;
        if (chatId) {
          setActiveChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params }, setActiveChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
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
      isAuthenticated,
      currentUser,
      updateUser,
      sendMessage,
      joinChat,
      logout
    } = this.props;
    return (
      <div className={classes.container}>
        <SideBar
          chats={chats}
          activeChat={activeChat}
          myChats={myChats}
          createChat={createChat}
        />
        <div className={classes.contentWrapper}>
          <Header
            logout={logout}
            isAuthenticated={isAuthenticated}
            activeChat={activeChat}
            currentUser={currentUser}
            updateUser={updateUser}
          />
          {activeChat &&
          <Chat
            messages={messages}
            activeChat={activeChat}
            currentUser={currentUser}
            sendMessage={sendMessage}
            joinChat={joinChat}
          />
          }
          {!activeChat &&
          <PaperTip
            message={'Select chat to start messaging'}
          />
          }
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
