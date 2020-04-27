/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { ComponentProps } from '../../types';
export interface TabProps extends ComponentProps, HTMLProps<HTMLElement> {
    /**
     * Apply active `Tab` styles.
     */
    active?: boolean;
}
/**
 * Tab component for use within the `Tabs` component.
 * Easily style active tabs with the `active` prop.
 * See the [Tabs](#tabs) section for a full example.
 */
export declare class Tab extends PureComponent<TabProps, {}> {
    render(): JSX.Element;
}
export default Tab;
