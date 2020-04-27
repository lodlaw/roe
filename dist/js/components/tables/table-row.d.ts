/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type TableRowProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Table row component with additional styles & functionality, used within a table head or body.
 * See the [Table](#table) section for a full example.
 */
export declare class TableRow extends PureComponent<TableRowProps, {}> {
    render(): JSX.Element;
}
export default TableRow;
