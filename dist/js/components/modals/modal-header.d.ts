/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ModalHeaderProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Header for `Modal`s to display a title.
 * See the [Modal](#modal) section for a full example.
 */
export declare class ModalHeader extends PureComponent<ModalHeaderProps, {}> {
    render(): JSX.Element;
}
export default ModalHeader;
