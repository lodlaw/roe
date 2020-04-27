/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ContentBoxFooterProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Footer for `ContentBox`s, ideal for submit buttons, links & sub-text.
 * See the [ContentBox](#contentbox) section for a full example.
 */
export declare class ContentBoxFooter extends PureComponent<ContentBoxFooterProps, {}> {
    render(): JSX.Element;
}
export default ContentBoxFooter;
