/// <reference types="react" />
import * as React from 'react';
import { PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface PrefixSuffixProps extends ComponentProps {
    /**
     * Content to display to the left of the input.
     */
    prefix?: React.ReactChild;
    /**
     * Content to display to the right of the input.
     */
    suffix?: React.ReactChild;
    /**
     * Set the style `display: block;` so the input group fills its parent.
     */
    block?: boolean;
    /**
     * Class name to apply to the input.
     */
    inputClassName?: string;
    /**
     * Class name to apply to the prefix.
     */
    prefixClassName?: string;
    /**
     * Class name to apply to the suffix.
     */
    suffixClassName?: string;
    value?: string | string[] | number;
}
export declare type InputWithPrefixSuffixProps = React.HTMLAttributes<HTMLInputElement> & PrefixSuffixProps;
/**
 * A precomposed Input containing an optional prefix (InputGroupAddon), an input,
 * and an optional suffix (InputGroupAddon).
 */
export declare class InputWithPrefixSuffix extends PureComponent<InputWithPrefixSuffixProps, {}> {
    render(): JSX.Element;
}
export default InputWithPrefixSuffix;
