/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ErrorTip from '../ErrorTip';

const mockProps = {
  error: null,
};

describe('<ErrorTip />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorTip {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<ErrorTip {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
