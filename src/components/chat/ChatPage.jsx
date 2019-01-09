import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import DrawerLeft from '../layout/sidebar/Drawer';
import Header from '../layout/Header';
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

const ChatPage = ({ classes, isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <Redirect to={'/auth'} />
    );
  }
  return (
    <div className={classes.container}>
      <DrawerLeft chats={mockData.chats} />
      <div className={classes.contentWrapper}>
        <Header />
        <Chat messages={mockData.messages} />
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatPage);
