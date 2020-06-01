/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type InputGroupAddonProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Used to display additional context within an `InputGroup`.
 */
export declare class InputGroupAddon extends PureComponent<InputGroupAddonProps, {}> {
    render(): JSX.Element;
}
export default InputGroupAddon;
