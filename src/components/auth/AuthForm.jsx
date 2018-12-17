import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
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
  }
});


const AuthForm = ({ fields, values, submitText, classes, inputChange, onSubmit, hidden }) => (
  <form className={classNames(classes.authForm, hidden && classes.hidden)} onSubmit={onSubmit}>
    {fields.map(({ type, name, placeholder, required }, index) => (
      <TextField
        fullWidth
        key={index}
        label={placeholder}
        placeholder={placeholder}
        name={name}
        value={values[name]}
        type={type}
        required={required}
        className={classes.textField}
        margin="normal"
        onChange={inputChange(name)}
      />
    ))}
    <Button
      variant="contained"
      color="primary"
      className={classes.submitButton}
      type={'submit'}
    >
      {submitText}
    </Button>
  </form>
);

export default withStyles(styles)(AuthForm);
