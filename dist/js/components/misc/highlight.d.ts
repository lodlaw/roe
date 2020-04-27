/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface HighlightProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Displays the overlay
     * @default false
     */
    open?: boolean;
    /**
     * Disables any interactions with highlighted area
     * @default false
     */
    disabled?: boolean;
    /**
     * Background colour
     * @default undefined
     */
    backgroundColor?: string | undefined;
}
/**
 * This highlight component is used to display a single element while shading everything else out.
 */
export declare class Highlight extends PureComponent<HighlightProps, {}> {
    render(): JSX.Element;
}
export default Highlight;
