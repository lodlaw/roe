import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { FormGroup } from '../src/ts/';

describe('FormGroup', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<FormGroup />);

    expect(tree).toMatchSnapshot();
  });

  it('should use a block prop (boolean) as a class name', () => {
    const tree = renderer.create(<FormGroup block />);

    expect(tree).toMatchSnapshot();
  });

  it('should use a noLabel prop (boolean) as a class name', () => {
    const tree = renderer.create(<FormGroup noLabel />);

    expect(tree).toMatchSnapshot();
  });

  it('should take regular element attributes', () => {
    const tree = renderer.create(<FormGroup className="my-class" />);

    expect(tree).toMatchSnapshot();
  });
});
