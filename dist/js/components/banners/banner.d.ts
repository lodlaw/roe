/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface BannerProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * If set, displays the component, otherwise it is hidden
     * @default true
     */
    open?: boolean;
    /**
     * Positions the element at the 'top' or 'bottom' of the screen
     * @default 'bottom'
     */
    position?: 'top' | 'bottom';
}
/**
 * A Banner component that displays fixed to the top or bottom of the screen.
 */
export declare class Banner extends PureComponent<BannerProps, {}> {
    render(): JSX.Element;
}
export default Banner;
