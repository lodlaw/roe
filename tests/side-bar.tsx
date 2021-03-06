import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { SideBar } from '../src/ts/';

describe('SideBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <SideBar position="left" onClickOutside={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot right', () => {
    const tree = renderer.create(
      <SideBar position="right" onClickOutside={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should accept regular element attributes', () => {
    const tree = renderer.create(
      <SideBar
        className="my-class"
        position="left"
        onClickOutside={jest.fn()}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when open', () => {
    const tree = renderer.create(
      <SideBar open position="left" onClickOutside={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should apply no-shadow class', () => {
    const tree = renderer.create(
      <SideBar noShadow position="left" onClickOutside={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('should accept a component props', () => {
    const tree = renderer.create(
      <SideBar component="ul" position="left" onClickOutside={jest.fn()} />
    );

    expect(tree).toMatchSnapshot();
  });
});
