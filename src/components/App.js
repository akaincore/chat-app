import React, {Component} from 'react';
import DrawerLeft from "./sidebar/Drawer";
import Header from "./layout/Header";
import mockData from '../mock-data'
import MessagesList from "./messages/MessagesList";
import {withStyles} from '@material-ui/core/styles';

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

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <main className={classes.container}>
        <DrawerLeft chats={mockData.chats}/>
        <div className={classes.contentWrapper}>
          <Header/>
          <MessagesList messages={mockData.messages}/>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(App);
