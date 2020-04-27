/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type SectionProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Used to separate sections of content with a horizontal-rule-like style.
 * Should only be used inside `ContentBox`s or `Column`s.
 */
export declare class Section extends PureComponent<SectionProps, {}> {
    render(): JSX.Element;
}
export default Section;
