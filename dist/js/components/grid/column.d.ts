/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface ColumnProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Columns to occupy on extra small screens
     */
    xs?: number;
    /**
     * Columns to occupy on small screens
     */
    sm?: number;
    /**
     * Columns to occupy on medium screens
     */
    md?: number;
    /**
     * Columns to occupy on large screens
     */
    lg?: number;
    /**
     * Columns to occupy on extra large screens
     */
    xl?: number;
    /**
     * Columns to be offset by, with `margin-left`, on extra small screens
     */
    xsOffset?: number;
    /**
     * Columns to be offset by, with `margin-left`, on small screens
     */
    smOffset?: number;
    /**
     * Columns to be offset by, with `margin-left`, on medium screens
     */
    mdOffset?: number;
    /**
     * Columns to be offset by, with `margin-left`, on large screens
     */
    lgOffset?: number;
    /**
     * Columns to be offset by, with `margin-left`, on extra large screens
     */
    xlOffset?: number;
    /**
     * Columns to fill with `margin-right` on extra small screens
     */
    xsFill?: number;
    /**
     * Columns to fill with `margin-right` on small screens
     */
    smFill?: number;
    /**
     * Columns to fill with `margin-right` on medium screens
     */
    mdFill?: number;
    /**
     * Columns to fill with `margin-right` on large screens
     */
    lgFill?: number;
    /**
     * Columns to fill with `margin-right` on extra large screens
     */
    xlFill?: number;
    /**
     * Columns to be push left by, with `left`, on extra small screens
     */
    xsPush?: number;
    /**
     * Columns to be push left by, with `left`, on small screens
     */
    smPush?: number;
    /**
     * Columns to be push left by, with `left`, on medium screens
     */
    mdPush?: number;
    /**
     * Columns to be push left by, with `left`, on large screens
     */
    lgPush?: number;
    /**
     * Columns to be push left by, with `left`, on extra large screens
     */
    xlPush?: number;
    /**
     * Columns to be pulled left by, with `left`, on on extra small screens
     */
    xsPull?: number;
    /**
     * Columns to be pulled left by, with `left`, on on small screens
     */
    smPull?: number;
    /**
     * Columns to be pulled left by, with `left`, on on medium screens
     */
    mdPull?: number;
    /**
     * Columns to be pulled left by, with `left`, on on large screens
     */
    lgPull?: number;
    /**
     * Columns to be pulled left by, with `left`, on on extra large screens
     */
    xlPull?: number;
}
/**
 * Placed inside rows to align content in columns.
 * The default grid has 12 divisions.
 */
export declare class Column extends PureComponent<ColumnProps, {}> {
    render(): JSX.Element;
}
export default Column;
