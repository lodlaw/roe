/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface TableProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Currently unused.
     * @default "'sm'"
     */
    collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Allows the table to scroll horizontally.
     */
    scrollable?: boolean;
    /**
     * Applies striped styles to the table.
     */
    striped?: boolean;
    /**
     * Adds border styles to the table.
     */
    bordered?: boolean;
    /**
     * Applies styles to table rows on hover.
     */
    hover?: boolean;
    /**
     * Condensed table padding.
     */
    condensed?: boolean;
    /**
     * Fill the parent element.
     */
    fill?: boolean;
    /**
     * Applies `table-layout: fixed;` style so that all columns are the same width.
     */
    fixed?: boolean;
    /**
     * Fix the first cell of every row so they do not scroll.
     */
    fixRowHeaders?: boolean;
    /**
     * Set a width for the first column when fixed.
     */
    rowHeaderWidth?: number;
}
/**
 * Table component with additional styles & functionality.
 */
export declare class Table extends PureComponent<TableProps, {}> {
    render(): JSX.Element;
}
export default Table;
