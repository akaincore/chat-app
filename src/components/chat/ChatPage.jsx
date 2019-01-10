import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../layout/sidebar/SideBar';
import Header from '../layout/header/Header';
import Chat from './Chat';
import PaperTip from '../common/PaperTip';
import { createChat } from '../../core/actions';

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
    const { fetchAllChats, fetchMyChats } = this.props;
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ]);
  }

  render() {
    const {
      classes,
      chats,
      activeChat,
      setActiveChat,
      myChats,
      createChat,
      isAuthenticated,
      currentUser,
      updateUser,
      logout
    } = this.props;
    return (
      <div className={classes.container}>
        <SideBar
          chats={chats}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
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
            activeChat={activeChat}
            currentUser={currentUser}
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
