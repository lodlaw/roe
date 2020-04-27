/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export declare type TabsProps = ComponentProps & HTMLProps<HTMLElement>;
/**
 * Used to contain a set of `Tab` components.
 */
export declare class Tabs extends PureComponent<TabsProps, {}> {
    render(): JSX.Element;
}
export default Tabs;
