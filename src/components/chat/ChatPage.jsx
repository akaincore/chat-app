import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../layout/sidebar/SideBar';
import Header from '../layout/header/Header';
import mockData from '../../mock-data';
import Chat from './Chat';

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
    const { classes, chats, isAuthenticated, logout } = this.props;
    return (
      <div className={classes.container}>
        <SideBar chats={chats} />
        <div className={classes.contentWrapper}>
          <Header
            logout={logout}
            isAuthenticated={isAuthenticated}
          />
          <Chat messages={[]} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
