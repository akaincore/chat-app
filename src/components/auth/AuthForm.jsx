import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: '20px',
    marginBottom: '20px',
    width: '80%',
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submitButton: {
    margin: theme.spacing.unit,
    width: 200,
    marginTop: '20px',
    marginBottom: '20px',
  },
  hidden: {
    display: 'none',
  },
});

const AuthForm = ({
 fields, values, submitText, classes, inputChange, onSubmit,
}) => (
  <form className={classes.authForm} onSubmit={onSubmit}>
    {fields.map(({
 type, name, placeholder, required,
}) => (
      <TextField
        fullWidth
        key={`${type}-${name}`}
        label={placeholder}
        placeholder={placeholder}
        name={name}
        value={values[name]}
        type={type}
        required={required}
        className={classes.textField}
        margin="normal"
        onChange={inputChange}
      />
    ))}
    <Button variant="contained" color="primary" className={classes.submitButton} type="submit">
      {submitText}
    </Button>
  </form>
);

AuthForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  submitText: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AuthForm);
