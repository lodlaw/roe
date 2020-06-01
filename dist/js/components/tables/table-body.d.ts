/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type TableBodyProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Table body component with additional styles & functionality, used to contain main table content.
 * See the [Table](#table) section for a full example.
 */
export declare class TableBody extends PureComponent<TableBodyProps, {}> {
    render(): JSX.Element;
}
export default TableBody;
