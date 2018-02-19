import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import store, { StoreState } from '../../store';
import { ComponentProps } from '../../types';

export type AppRootProps = HTMLProps<HTMLElement> & ComponentProps & StoreState;

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
export class AppRootUnconnected extends PureComponent<AppRootProps, {}> {
  public render () {
    const {
      component: Component = 'div',
      children,
      className,
      hasStickyFooter,
      hasFixedNavBar,
      navBarHeight,
      footerHeight,
      ...remainingProps,
    } = this.props;

    const myClassNames = [
      'app-root',
      hasStickyFooter && 'has-sticky-footer' || null,
      hasFixedNavBar && 'has-fixed-nav-bar' || null,
      className,
    ];

    const style = {
      paddingTop: hasFixedNavBar && navBarHeight,
      paddingBottom: hasStickyFooter && footerHeight,
    };

    return (
      <Component
        {...remainingProps}
        className={classNames(myClassNames)}
        style={style}
      >
        {children}
      </Component>
    );
  }
}

export const AppRoot = store.connect(AppRootUnconnected);

export default AppRoot;
