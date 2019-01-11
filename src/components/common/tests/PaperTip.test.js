/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PaperTip from '../PaperTip';

const mockProps = {
  message: 'foo bar baz',
};
describe('<PaperTip />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaperTip {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<PaperTip {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
