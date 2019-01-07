import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-fetch';
import Header from '../layout/Header';
import AuthForm from './AuthForm';
import getFieldsInitialState from '../../utils/fields';

const styles = () => ({
  formContainer: {
    margin: '50px auto',
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

  state = {
    currentTab: 'login',
    login: getFieldsInitialState(fields.login),
    signup: getFieldsInitialState(fields.signup),
  };

  tabChange = (event, currentTab) => {
    this.setState({ currentTab });
  };

  inputChange = (form) => (event) => {
    event.persist();
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [form]: {
        ...prevState[form],
        [name]: value
      },
    }));
  };

  onSubmit = (form) => (event) => {
    event.preventDefault();
    const data = this.state[form];
    let url = 'http://10.102.100.176:9999/v1';
    url += form === 'login' ? '/login' : '/signup';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(reason => console.error(reason));
  };

  render() {
    const { classes } = this.props;
    const { currentTab, login, signup } = this.state;
    return (
      <Grid container justify={'center'}>
        <Header/>
        <Grid item className={classes.formContainer}>
          <Paper square>
            <Tabs
              value={currentTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.tabChange}
            >
              <Tab label="Login" value={'login'}/>
              <Tab label="Sign Up" value={'signup'}/>
            </Tabs>
            {currentTab === 'login' ?
              <AuthForm
                fields={fields.login}
                values={login}
                submitText={'Login'}
                inputChange={this.inputChange('login')}
                onSubmit={this.onSubmit('login')}
              /> :
              <AuthForm
                fields={fields.signup}
                values={signup}
                submitText={'Sign Up'}
                inputChange={this.inputChange('signup')}
                onSubmit={this.onSubmit('signup')}
              />
            }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AuthPage);
