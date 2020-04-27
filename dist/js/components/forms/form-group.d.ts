/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface FormGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Set the style `display: block;` with label above input.
     */
    block?: boolean;
    /**
     * Offset the input, select, etc as if there was a label to the left of it
     */
    noLabel?: boolean;
}
/**
 * Used to group a label & form input (or select).
 */
export declare class FormGroup extends PureComponent<FormGroupProps, {}> {
    render(): JSX.Element;
}
export default FormGroup;
