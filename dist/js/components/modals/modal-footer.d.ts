/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ModalFooterProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Footer for `Modal`s to contain submit buttons, link or sub-text.
 * See the [Modal](#modal) section for a full example.
 */
export declare class ModalFooter extends PureComponent<ModalFooterProps, {}> {
    render(): JSX.Element;
}
export default ModalFooter;
