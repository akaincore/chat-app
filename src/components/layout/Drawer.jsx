import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


const styles = theme => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 320,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -320,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class DrawerLeft extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      </Drawer>
    );
  }
}


export default withStyles(styles, {withTheme: true})(DrawerLeft);
