/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
export declare type AnchorProps = HTMLProps<HTMLAnchorElement>;
/**
 * Link component that automatically creates an id and hash href that match, for linking to elements on a single page.
 */
export declare class Anchor extends PureComponent<AnchorProps, {}> {
    render(): JSX.Element;
}
export default Anchor;
