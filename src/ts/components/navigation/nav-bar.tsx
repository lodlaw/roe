import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import * as ReactDOM from 'react-dom';
import store from '../../store';
import { ComponentProps } from '../../types';
import { getScrollOffset } from '../../utils';

const WITH_FIXED_NAV_BAR = 'with-fixed-nav-bar';

export interface NavBarProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Fix the navbar to the top of the screen
   */
  fixed?: boolean;
  /**
   * Hide the navbar when scrolling down, but display when scrolling up
   */
  shy?: boolean;
  /**
   * Remove NavBar shadow
   */
  noShadow?: boolean;
}

export interface NavBarState {
  hidden: boolean;
}

export class NavBar extends PureComponent<NavBarProps, NavBarState> {
  private previousScrollY: number;

  public constructor (props: NavBarProps) {
    super(props);

    this.previousScrollY = getScrollOffset().y;

    this.state = {
      hidden: false,
    };
  }

  public componentDidMount () {
    this.notifyAppRoot(this.props);
    this.toggleShyListeners(this.props);
  }

  public componentWillUpdate (nextProps: NavBarProps) {
    if (this.props.shy !== nextProps.shy) {
      this.toggleShyListeners(nextProps);
    }

    if (this.props.fixed !== nextProps.fixed || this.props.shy !== nextProps.shy) {
      this.notifyAppRoot(nextProps);
    }
  }

  public componentWillUnmount () {
    window.removeEventListener('scroll', this.hideOrShowNavBar);
    window.removeEventListener('resize', this.hideOrShowNavBar);
    this.notifyAppRoot({fixed: false});
  }

  public render () {
    const {
      children,
      className,
      fixed,
      shy,
      noShadow,
      component: Component = 'div',
      ...remainingProps,
    } = this.props;

    const {
      hidden,
    } = this.state;

    const myClassNames = [
      'nav-bar',
      fixed || shy ? 'fixed' : null,
      shy ? 'shy' : null,
      hidden ? 'hidden' : null,
      noShadow ? 'no-shadow' : null,
      className
    ];

    return (
      <Component {...remainingProps} className={classNames(myClassNames)}>
        {children}
      </Component>
    );
  }

  private notifyAppRoot (props: NavBarProps) {
    const { fixed, shy } = props;

    store.setState({
      hasFixedNavbar: fixed || shy,
      navBarHeight: ReactDOM.findDOMNode(this).getBoundingClientRect().height,
    });
  }

  private toggleShyListeners (props: NavBarProps) {
    const { shy } = props;

    if (shy) {
      window.addEventListener('scroll', this.hideOrShowNavBar);
      window.addEventListener('resize', this.hideOrShowNavBar);
    } else {
      window.removeEventListener('scroll', this.hideOrShowNavBar);
      window.removeEventListener('resize', this.hideOrShowNavBar);
    }
  }

  private hideOrShowNavBar = () => {
    const { y } = getScrollOffset();
    const element = ReactDOM.findDOMNode(this);

    if (element) {
      const { height } = element.getBoundingClientRect();

      if (y > this.previousScrollY && y > height) {
        this.setState({
          hidden: true,
        });
      } else if (y < this.previousScrollY) {
        this.setState({
          hidden: false,
        });
      }
    }

    this.previousScrollY = y;
  }
}

export default NavBar;
