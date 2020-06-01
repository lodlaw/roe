/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface NavBarProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Fix the navbar to the top of the screen
     */
    fixed?: boolean;
    /**
     * Hide the navbar when scrolling down, but display when scrolling up
     */
    shy?: boolean;
    /**
     * Remove NavBar shadow
     */
    noShadow?: boolean;
}
export interface NavBarState {
    hidden: boolean;
}
export declare class NavBar extends PureComponent<NavBarProps, NavBarState> {
    private previousScrollY;
    private mountTime;
    constructor(props: NavBarProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: NavBarProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private notifyAppRoot(props);
    private updateAppRoot;
    private toggleResizeListeners(props);
    private toggleShyListeners(props);
    private hideOrShowNavBar;
}
export default NavBar;
