import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  paperMessage: {
    width: '50%',
    margin: '100px auto',
    padding: '50px',
    maxWidth: '400px',
    textAlign: 'center',
  },
});

const PaperTip = ({ classes, message }) => (
  <Paper className={classes.paperMessage}>{message}</Paper>
);

PaperTip.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(PaperTip);
