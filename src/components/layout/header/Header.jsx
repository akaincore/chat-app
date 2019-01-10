import AppBar from '@material-ui/core/AppBar/index';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';

const styles = () => ({
  appBar: {
    width: '100%',
  },
  toolBar: {
    padding: '0 50px',
    display: 'flex',
    justifyContent: 'space-between',
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
  } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" color="inherit">
          {activeChat ? activeChat.title : 'Chat App'}
        </Typography>
        {isAuthenticated &&
        <ProfileMenu
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
