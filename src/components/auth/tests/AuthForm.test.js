/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import AuthForm from '../AuthForm';

const mockProps = {
  fields: [
    {
      name: 'field',
      type: 'text',
      placeholder: 'placeholder',
      required: true,
    },
  ],
  values: { field: 'baz' },
  submitText: 'text',
  inputChange: jest.fn(),
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthForm {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
