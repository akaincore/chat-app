import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChatList from './ChatList';
import SearchInput from './SearchInput';
import Divider from '@material-ui/core/Divider';
import BottomNav from './BottomNav';
import AddChat from './AddChat';


const styles = theme => ({
  drawer: {
    width: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 320,
  },
});

class SideBar extends React.Component {

  render() {
    const { classes, chats } = this.props;

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
        <ChatList chats={chats} />
        <Divider />
        <AddChat />
        <BottomNav />
      </Drawer>
    );
  }
}


export default withStyles(styles, { withTheme: true })(SideBar);
