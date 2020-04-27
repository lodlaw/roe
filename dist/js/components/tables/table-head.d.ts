/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type TableHeadProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Table head component with additional styles & functionality, used to contain table headers.
 * See the [Table](#table) section for a full example.
 */
export declare class TableHead extends PureComponent<TableHeadProps, {}> {
    render(): JSX.Element;
}
export default TableHead;
