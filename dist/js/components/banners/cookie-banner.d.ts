/// <reference types="react" />
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface CookieBannerRenderProps {
    dismiss: () => void;
}
export declare type Render = (props: CookieBannerRenderProps) => React.ReactElement<any>;
export interface CookieBannerProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Takes a component as a function and renders as a child
     */
    render: Render;
    /**
     * Positions the element at the 'top' or 'bottom' of the screen
     * @default 'bottom'
     */
    position?: 'top' | 'bottom';
}
export interface CookieBannerState {
    dismissed: boolean;
}
/**
 * A [Banner](#banner) component that is permanently dismissed after setting a cookie.
 * This component takes a render prop, which can be a component or function, that is passed a dismiss prop
 * which you can then apply as an onClick prop to an element of your choice.
 */
export declare class CookieBanner extends PureComponent<CookieBannerProps, CookieBannerState> {
    constructor(props: CookieBannerProps);
    render(): JSX.Element;
    private setCookie;
}
export default CookieBanner;
