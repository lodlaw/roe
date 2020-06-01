/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type ContentBoxProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Box for displaying content within.
 */
export declare class ContentBox extends PureComponent<ContentBoxProps, {}> {
    render(): JSX.Element;
}
export default ContentBox;
