import AppBar from "@material-ui/core/AppBar/index";
import React from 'react';
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
  appBar: {
    width: '100%',
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Chat App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header);
