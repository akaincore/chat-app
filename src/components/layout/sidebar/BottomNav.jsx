import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExploreIcon from '@material-ui/icons/Explore';
import RestoreIcon from '@material-ui/icons/Restore';

const styles = {
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
};

class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="My chats" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Explore" icon={<RestoreIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNav);
