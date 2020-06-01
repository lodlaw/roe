/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type WellProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Stylistic content container.
 */
export declare class Well extends PureComponent<WellProps, {}> {
    render(): JSX.Element;
}
export default Well;
