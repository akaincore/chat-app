import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthForm from './AuthForm';
import getFieldsInitialState from '../utils/fields';
import ErrorTip from '../common/ErrorTip';

const styles = () => ({
  formContainer: {
    margin: '50px auto',
  },
  appBar: {
    width: '100%',
  },
  toolBar: {
    padding: '0 50px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

const fields = {
  login: [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true,
    },
  ],
  signup: [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true,
    },
    {
      name: 're_password',
      type: 'password',
      placeholder: 'Repeat password',
      required: true,
    },
  ],
};

class AuthPage extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    login: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  state = {
    currentTab: 'login',
    login: getFieldsInitialState(fields.login),
    signup: getFieldsInitialState(fields.signup),
  };

  tabChange = (event, currentTab) => {
    this.setState({ currentTab });
  };

  inputChange = form => event => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [form]: {
        ...prevState[form],
        [name]: value,
      },
    }));
  };

  onSubmit = form => event => {
    event.preventDefault();
    const { username, password } = this.state[form];
    if (form === 'login') {
      this.props.login(username, password);
    } else {
      this.props.signup(username, password);
    }
  };

  render() {
    const { classes, isAuthenticated, error } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }
    const { currentTab, login, signup } = this.state;
    return (
      <Grid container justify="center">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.titleWrapper}>
              <Typography variant="h6" color="inherit">
                {'Chat App'}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Grid item className={classes.formContainer}>
          <Paper square>
            <Tabs
              value={currentTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.tabChange}
            >
              <Tab label="Login" value="login" />
              <Tab label="Sign Up" value="signup" />
            </Tabs>
            {currentTab === 'login' ? (
              <AuthForm
                fields={fields.login}
                values={login}
                submitText="Login"
                inputChange={this.inputChange('login')}
                onSubmit={this.onSubmit('login')}
              />
            ) : (
              <AuthForm
                fields={fields.signup}
                values={signup}
                submitText="Sign Up"
                inputChange={this.inputChange('signup')}
                onSubmit={this.onSubmit('signup')}
              />
            )}
          </Paper>
        </Grid>
        <ErrorTip error={error} />
      </Grid>
    );
  }
}

export default withStyles(styles)(AuthPage);
