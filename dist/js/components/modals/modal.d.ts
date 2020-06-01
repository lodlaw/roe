/// <reference types="react" />
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface ModalProps extends ComponentProps, HTMLProps<HTMLDivElement> {
    /**
     * Allows the `ModalBody` to be scrolled, rather than page.
     */
    scrollable?: boolean;
    /**
     * Reduced size `Modal` for alerts.
     */
    small?: boolean;
    /**
     * Fill a larger area of the screen equal to the `Container`.
     */
    large?: boolean;
    /**
     * Fill the entire screen.
     */
    fill?: boolean;
    /**
     * Callback to trigger when the user clicks outside of the `Modal`.
     */
    onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}
/**
 * Component used to render a modal.
 */
export declare class Modal extends PureComponent<ModalProps, {}> {
    render(): JSX.Element;
}
export default Modal;
