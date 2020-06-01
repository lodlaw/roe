/// <reference types="react" />
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
export interface ModalRendererProps extends HTMLProps<HTMLElement> {
    /**
     * Array of modals to be rendered.
     */
    modals: ReadonlyArray<React.ReactNode>;
}
/**
 * Required to render modals.
 * Should be rendered in the root of your app.
 * See the [Modal](#modal) section for a full example.
 */
export declare class ModalRenderer extends PureComponent<ModalRendererProps, {}> {
    render(): JSX.Element;
}
export default ModalRenderer;
