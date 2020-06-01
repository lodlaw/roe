/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface ContainerProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Fill parent with no media queries to affect width.
     */
    fluid?: boolean;
    /**
     * Allows applying a background color with `@container-background` variable.
     */
    solid?: boolean;
}
/**
 * Used inside `NavBar`s or as the main wrapper for an application.
 */
export declare class Container extends PureComponent<ContainerProps, {}> {
    render(): JSX.Element;
}
export default Container;
