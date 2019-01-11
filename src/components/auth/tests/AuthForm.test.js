/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

describe('<AuthForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthForm {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AuthForm {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
