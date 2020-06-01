/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface ButtonProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Set the style `display: block;`.
     */
    block?: boolean;
    /**
     * Make the button large
     */
    large?: boolean;
    /**
     * Make the button small
     */
    small?: boolean;
}
/**
 * Used in place of a standard `button` tag, this component adds additional styles and effects.
 */
export declare class Button extends PureComponent<ButtonProps, {}> {
    render(): JSX.Element;
}
export default Button;
