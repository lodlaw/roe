/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { StoreState } from '../../store';
import { ComponentProps } from '../../types';
export declare type AppRootProps = HTMLProps<HTMLElement> & ComponentProps;
export declare type AppRootState = Pick<StoreState, 'hasStickyFooter' | 'hasFixedNavBar' | 'navBarHeight' | 'footerHeight'>;
/**
 * This is the most important part of your app.
 * This component interacts with other Roe components to adjust styles at the root level.
 * Your app must have an AppRoot if you wish to used a fixed / shy NavBar or sticky Footer.
 *
 * If your app is rendered inside another element directly within the body,
 * this element **MUST** have the "app" class applied.
 *
 * The "app" class ensures that the AppRoot is not affected by the outer, non-react element.
 */
export declare class AppRoot extends PureComponent<AppRootProps, AppRootState> {
    private unsubscribe;
    constructor(props: AppRootProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default AppRoot;
