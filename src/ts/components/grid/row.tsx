import * as classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';

import { ComponentAndHTMLProps, ComponentElement } from '../../types';

export type RowProps<T extends ComponentElement> = ComponentAndHTMLProps<T>;

/**
 * Used within a container, section, or column, to keep content on separate rows.
 * Row exists to allow columns to sit within a container / other column and be
 * spaced from each other without adding additional padding to the outsides.
 * It does this by using negative margin left and right. Additionally Row has
 * a clearfix applied which allows floated elements to be placed inside it
 * without it collapsing.
 */
export class Row<T extends ComponentElement = 'div'> extends PureComponent<
  RowProps<T>,
  {}
> {
  public render() {
    const {
      children,
      className,
      component: Component = 'div',
      ...remainingProps
    } = this.props;

    return (
      <Component {...remainingProps} className={classNames(['row', className])}>
        {children}
      </Component>
    );
  }
}

export default Row;
