import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';
import AddChat from './AddChat';
import ChatList from './ChatList';
import SearchInput from './SearchInput';

const styles = () => ({
  drawer: {
    width: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 320,
  },
  bottomNav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

class SideBar extends React.Component {

  state = {
    value: 0,
    modalOpen: false,
    newChatTitle: '',
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  onTitleChange = (event) => {
    this.setState({
      newChatTitle: event.target.value,
    });
  };

  handleCreateChat = () => {
    this.props.createChat(this.state.newChatTitle);
    this.handleModalClose();
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      chats,
      activeChat,
      myChats,
      setActiveChat,
    } = this.props;
    const { value, modalOpen, newChatTitle } = this.state;
    const tabChats = value === 0 ? myChats : chats;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SearchInput />
        <Divider />
        <ChatList
          chats={tabChats}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
        />
        <Divider />
        <AddChat
          modalOpen={modalOpen}
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
          title={newChatTitle}
          onTitleChange={this.onTitleChange}
          handleCreateChat={this.handleCreateChat}
        />
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.bottomNav}
        >
          <BottomNavigationAction label="My chats" icon={<ExploreIcon />} />
          <BottomNavigationAction label="Explore" icon={<RestoreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}


export default withStyles(styles)(SideBar);
