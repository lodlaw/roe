/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface CodeBlockProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Code to display.
     */
    children?: string;
    /**
     * Language of the code to display e.g. "javascript".
     */
    language?: string;
    /**
     * Name of the code block e.g. "index.js".
     */
    codeBlockName?: string;
}
/**
 * Component to nicely highlight code inside a `pre` element.
 */
export declare class CodeBlock extends PureComponent<CodeBlockProps, {}> {
    element: HTMLPreElement;
    constructor(props: CodeBlockProps);
    highlightBlock(element: HTMLPreElement): void;
    componentDidUpdate(prevProps: CodeBlockProps): void;
    render(): JSX.Element;
}
export default CodeBlock;
