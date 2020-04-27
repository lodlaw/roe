/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ModalBodyProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Used within a `Modal` to contain the main content.
 * See the [Modal](#modal) section for a full example.
 */
export declare class ModalBody extends PureComponent<ModalBodyProps, {}> {
    render(): JSX.Element;
}
export default ModalBody;
