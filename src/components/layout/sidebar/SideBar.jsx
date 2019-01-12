import React from 'react';
import PropTypes from 'prop-types';
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
import Chat from '../../../types/Chat';

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
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape(Chat)).isRequired,
    activeChat: PropTypes.shape(Chat),
    myChats: PropTypes.arrayOf(PropTypes.shape(Chat)).isRequired,
    isConnected: PropTypes.bool.isRequired,
    createChat: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeChat: null,
  };

  state = {
    value: 0,
    modalOpen: false,
    newChatTitle: '',
    search: '',
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState(prevState => ({
      ...prevState,
      modalOpen: false,
      newChatTitle: '',
    }));
  };

  onTitleChange = event => {
    this.setState({
      newChatTitle: event.target.value,
    });
  };

  onSearch = event => {
    this.setState({
      search: event.target.value,
    });
  };

  handleCreateChat = () => {
    this.props.createChat(this.state.newChatTitle);
    this.handleModalClose();
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  filterChats = chats => chats
      .filter(chat => chat.title.toLowerCase().includes(this.state.search.toLowerCase()))
      .sort((one, two) => (one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));

  render() {
    const {
 classes, chats, activeChat, myChats, isConnected,
} = this.props;
    const {
 value, modalOpen, newChatTitle, search,
} = this.state;
    const tabChats = value === 0 ? myChats : chats;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SearchInput value={search} onSearch={this.onSearch} />
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(tabChats)}
          activeChat={activeChat}
        />
        <Divider />
        <AddChat
          disabled={!isConnected}
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
