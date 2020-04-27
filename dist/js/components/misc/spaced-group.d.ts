/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface SpacedGroupProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Set the group to `display: block;` so it fills its parent.
     */
    block?: boolean;
    /**
     * Reduced spacing between items.
     */
    small?: boolean;
    /**
     * Increased spacing between items.
     */
    large?: boolean;
}
/**
 * Component to contain & automatically add space between inline elements.
 */
export declare class SpacedGroup extends PureComponent<SpacedGroupProps, {}> {
    render(): JSX.Element;
}
export default SpacedGroup;
