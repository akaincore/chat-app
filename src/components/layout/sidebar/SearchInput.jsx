import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const SearchInput = ({ classes, value, onSearch }) => (
  <div className={classes.container}>
    <Input
      fullWidth
      placeholder="Search chats..."
      className={classes.input}
      value={value}
      onChange={onSearch}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
  </div>
);

SearchInput.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchInput);
