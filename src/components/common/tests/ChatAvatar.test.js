/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatAvatar from '../ChatAvatar';

const mockProps = {
  title: 'foo',
  id: '12345',
};

describe('<ChatAvatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatAvatar {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatAvatar {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
