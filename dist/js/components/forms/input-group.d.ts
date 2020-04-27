/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface InputGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Set the style `display: block;` so the group fills its parent.
     */
    block?: boolean;
}
/**
 * Used to group inputs, selects, buttons, and `InputGroupAddon`s.
 */
export declare class InputGroup extends PureComponent<InputGroupProps, {}> {
    render(): JSX.Element;
}
export default InputGroup;
