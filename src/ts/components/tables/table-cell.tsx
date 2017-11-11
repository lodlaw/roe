import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { NBSP } from '../../constants';
import { BaseTableCellProps } from '../../types';
import { shouldNotBeRendered } from '../../utils';

export type TableCellProps = BaseTableCellProps & HTMLProps<HTMLElement>;

/**
 * Table cell component with additional styles & functionality, used within table rows.
 * See the [Table](#table) section for a full example.
 */
export const TableCell: StatelessComponent<TableCellProps> = (props) => {
  const {
    className,
    children,
    style,
    width,
    component: Component = 'td',
    ...remainingProps
  } = props;

  return (
    <Component
      {...remainingProps}
      className={classNames('table-cell', className)}
      style={{width, maxWidth: width, minWidth: width, ...style}}
    >
      {shouldNotBeRendered(children) ? NBSP : children}
    </Component>
  );
}

export default TableCell;
