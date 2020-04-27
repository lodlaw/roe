/// <reference types="react" />
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface SpeechBubbleProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Set the style `display: block;`.
     */
    block?: boolean;
    /**
     *  Display the tail on either the left or the right.
     * @default 'left'
     */
    tailPosition?: 'left' | 'right';
    /**
     * Elements to display above the speech bubble such as user name or time of post.
     */
    header?: React.ReactChild;
    /**
     * Elements to display below the speech bubble such as user name or time of post.
     */
    footer?: React.ReactChild;
}
/**
 * Speech bubble component for displaying conversations / messages.
 */
export declare class SpeechBubble extends PureComponent<SpeechBubbleProps, {}> {
    render(): JSX.Element;
}
export default SpeechBubble;
