import AppBar from '@material-ui/core/AppBar/index';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';
import ChatMenu from './ChatMenu';

const styles = () => ({
  appBar: {
    width: '100%',
  },
  toolBar: {
    padding: '0 50px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Header = (props) => {
  const {
    classes,
    logout,
    isAuthenticated,
    currentUser,
    updateUser,
    activeChat,
    deleteChat,
    leaveChat,
    isConnected,
  } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.titleWrapper}>
          <Typography variant="h6" color="inherit">
            {activeChat ? activeChat.title : 'Chat App'}
          </Typography>
          {activeChat &&
          <ChatMenu
            disabled={!isConnected}
            currentUser={currentUser}
            deleteChat={() => deleteChat(activeChat._id)}
            leaveChat={() => leaveChat(activeChat._id)}
          />
          }
        </div>
        {isAuthenticated &&
        <ProfileMenu
          disabled={!isConnected}
          currentUser={currentUser}
          updateUser={updateUser}
          logout={logout}
        />
        }
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
