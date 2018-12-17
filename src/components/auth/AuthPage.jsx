import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import Header from "../layout/Header";
import AuthForm from "./AuthForm";
import getFieldsInitialState from "../../utils/fields";

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

  inputChange = (form) => (field) => (event) => {
    event.persist();
    this.setState((prevState) => ({
      [form]: {
        ...prevState[form],
        [field]: event.target.value
      },
    }));
  };

  onSubmit = (form) => (event) => {
    event.preventDefault();
    const data = this.state[form];
    console.log(data);
  };

  render() {
    const { classes } = this.props;
    const { currentTab, login, signup } = this.state;
    return (
      <Grid container justify={"center"}>
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
                hidden={currentTab !== 'signup'}
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
