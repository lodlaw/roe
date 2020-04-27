/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface FooterProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Fix the footer to the bottom of the window when there is not enough content to push it down.
     */
    sticky?: boolean;
    /**
     * Fix the footer to the bottom of the screen always
     */
    fixed?: boolean;
}
export declare class Footer extends PureComponent<FooterProps, {}> {
    componentDidMount(): void;
    componentDidUpdate(prevProps: FooterProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private notifyAppRoot(props);
    private updateAppRoot;
    private toggleResizeListeners(props);
}
export default Footer;
