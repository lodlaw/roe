/// <reference types="react" />
import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface CollapseProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether the collapse is open or not
     * @default false
     */
    open: boolean;
    /**
     * Duration of the animation (milliseconds)
     * @default 200
     */
    animationDuration?: number;
    /**
     * Maximum height when collapsed
     * @default 0
     */
    maxCollapsedHeight?: number | string;
    /**
     * Minimum height
     * @default auto
     */
    minHeight?: number | string;
    /**
     * Whether to fade out the content
     * @default false
     */
    fadeOut?: boolean;
    /**
     * Color to fade to
     * @default rgba(255, 255, 255, 1)
     */
    fadeColor?: string;
    /**
     * Transparent color to fade from (this should be a transparent version of the fadeColor)
     * @default rgba(255, 255, 255, 0)
     */
    transparentColor?: string;
    /**
     * Height of the faded area
     * @default 50
     */
    fadeHeight?: number;
}
export interface CollapseState {
    height: number | string;
    opened: boolean;
    opening: boolean;
}
/**
 * Component to expand and collapse content, optionally displaying a small preview.
 */
export declare class Collapse extends PureComponent<CollapseProps, CollapseState> {
    private element;
    private timeout;
    constructor(props: CollapseProps);
    componentDidUpdate(previousProps: CollapseProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Collapse;
