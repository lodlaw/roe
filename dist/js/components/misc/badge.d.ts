/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type BadgeProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * A badge component for displaying small pieces of information such as counts and statuses.
 */
export declare class Badge extends PureComponent<BadgeProps, {}> {
    render(): JSX.Element;
}
export default Badge;
