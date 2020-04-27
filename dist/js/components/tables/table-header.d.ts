/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { BaseTableCellProps } from '../../types';
export declare type TableHeaderProps = BaseTableCellProps & HTMLProps<HTMLElement>;
/**
 * Table header component with additional styles & functionality, used to style and or fix table headers.
 * See the [Table](#table) section for a full example.
 */
export declare class TableHeader extends PureComponent<TableHeaderProps, {}> {
    render(): JSX.Element;
}
export default TableHeader;
