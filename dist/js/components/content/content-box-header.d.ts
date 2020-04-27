/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ContentBoxHeaderProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Header for `ContentBox`s, used to display a content's title.
 * See the [ContentBox](#contentbox) section for a full example.
 */
export declare class ContentBoxHeader extends PureComponent<ContentBoxHeaderProps, {}> {
    render(): JSX.Element;
}
export default ContentBoxHeader;
