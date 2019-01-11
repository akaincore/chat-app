/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import AuthPage from '../AuthPage';

jest.mock('../AuthForm', () => () => 'AuthForm');

const mockProps = {
  isAuthenticated: false,
  error: null,
  login: jest.fn(),
  signup: jest.fn(),
  receiveAuth: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthPage {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
