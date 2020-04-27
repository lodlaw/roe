/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type AlertProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * A component for applying various styles to text, ideal for info, success, and error messages.
 */
export declare class Alert extends PureComponent<AlertProps, {}> {
    render(): JSX.Element;
}
export default Alert;
