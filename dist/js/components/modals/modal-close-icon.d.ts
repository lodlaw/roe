/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ModalCloseIconProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Used within a `ModalHeader` to add a close icon in the top right.
 * See the [Modal](#modal) section for a full example.
 */
export declare class ModalCloseIcon extends PureComponent<ModalCloseIconProps, {}> {
    render(): JSX.Element;
}
export default ModalCloseIcon;
