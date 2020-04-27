/// <reference types="react" />
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface SideBarProps extends HTMLProps<HTMLElement>, ComponentProps {
    /**
     * SideBar is hidden off screen if this is falsy.
     */
    open?: boolean;
    /**
     * Position the SideBar to the left or right of the screen.
     */
    position: 'left' | 'right';
    /**
     * Remove SideBar shadow
     */
    noShadow?: boolean;
    /**
     * Callback to trigger when the user clicks outside of the `SideBar`.
     */
    onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}
/**
 * SideBar navigation that opens over the content. Often used as the primary navigation on small devices.
 * See the [Nav](#nav) section for more details.
 */
export declare class SideBar extends PureComponent<SideBarProps, {}> {
    render(): JSX.Element;
}
export default SideBar;
