/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { BaseTableCellProps } from '../../types';
export declare type TableCellProps = BaseTableCellProps & HTMLProps<HTMLElement>;
/**
 * Table cell component with additional styles & functionality, used within table rows.
 * See the [Table](#table) section for a full example.
 */
export declare class TableCell extends PureComponent<TableCellProps, {}> {
    render(): JSX.Element;
}
export default TableCell;
