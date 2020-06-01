/// <reference types="react" />
import * as React from 'react';
export declare type ComponentType<P> = React.ComponentClass<P> | React.StatelessComponent<P>;
export declare type StoreState = Partial<{
    hasFixedNavBar: boolean;
    hasStickyFooter: boolean;
    navBarHeight: number;
    footerHeight: number;
}>;
export declare type StoreListener = (state: StoreState) => any;
export declare class Store {
    private state;
    private listeners;
    constructor(initialState?: StoreState);
    setState: (state: Partial<{
        hasFixedNavBar: boolean;
        hasStickyFooter: boolean;
        navBarHeight: number;
        footerHeight: number;
    }>) => void;
    getState: () => {
        hasFixedNavBar?: boolean | undefined;
        hasStickyFooter?: boolean | undefined;
        navBarHeight?: number | undefined;
        footerHeight?: number | undefined;
    };
    subscribe: (listener: StoreListener) => () => void;
    private createUnsubscriber;
}
declare const _default: Store;
export default _default;
