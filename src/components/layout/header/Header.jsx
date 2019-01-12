import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfileMenu from './ProfileMenu';
import ChatMenu from './ChatMenu';
import Chat from '../../../types/Chat';
import CurrentUser from '../../../types/CurrentUser';

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

const Header = ({
  classes,
  logout,
  isAuthenticated,
  currentUser,
  updateUser,
  activeChat,
  deleteChat,
  leaveChat,
  isConnected,
}) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar className={classes.toolBar}>
      <div className={classes.titleWrapper}>
        <Typography variant="h6" color="inherit">
          {activeChat ? activeChat.title : 'Chat App'}
        </Typography>
        {activeChat && currentUser.isChatMember && (
          <ChatMenu
            disabled={!isConnected}
            currentUser={currentUser}
            deleteChat={() => deleteChat(activeChat._id)}
            leaveChat={() => leaveChat(activeChat._id)}
          />
        )}
      </div>
      {isAuthenticated && (
        <ProfileMenu
          disabled={!isConnected}
          currentUser={currentUser}
          updateUser={updateUser}
          logout={logout}
        />
      )}
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape(CurrentUser).isRequired,
  updateUser: PropTypes.func.isRequired,
  activeChat: PropTypes.shape(Chat),
  deleteChat: PropTypes.func.isRequired,
  leaveChat: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(Header);
