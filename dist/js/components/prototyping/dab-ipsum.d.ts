/// <reference types="react" />
import { Component } from 'react';
export interface DabIpsumProps {
    /**
     * Set the component to render a different element type.
     * @default "'p'"
     */
    component?: 'ul' | 'ol' | 'p' | 'text';
    /**
     * The number of elements (e.g. paragraphs) to render.
     * @default 5
     */
    count?: number;
}
/**
 * Custom Ipsum component, useful for rendering placeholder text when prototyping.
 */
export declare class DabIpsum extends Component<DabIpsumProps, {}> {
    shouldComponentUpdate(prevProps: DabIpsumProps): boolean;
    render(): JSX.Element;
}
export default DabIpsum;
