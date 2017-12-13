import * as classNames from 'classnames';
import * as React from 'react';
import { HTMLProps, StatelessComponent } from 'react';
import { ComponentProps } from '../../types';

export interface ModalProps extends ComponentProps, HTMLProps<HTMLElement> {
  /**
   * Allows the `ModalBody` to be scrolled, rather than page.
   */
  scrollable?: boolean;
  /**
   * Reduced size `Modal` for alerts.
   */
  small?: boolean;
  /**
   * Fill a larger area of the screen equal to the `Container`.
   */
  large?: boolean;
  /**
   * Fill the entire screen.
   */
  fill?: boolean;
  /**
   * Callback to trigger when the user clicks outside of the `Modal`.
   */
  onClickOutside(event: React.MouseEvent<HTMLDivElement>): void;
}

/**
 * Component used to render a modal.
 */
export const Modal: StatelessComponent<ModalProps> = (props) => {
  const {
    className,
    children,
    onClickOutside,
    scrollable,
    small,
    large,
    fill,
    component: Component = 'div',
    ...remainingProps
  } = props;

  const myClassNames = [
    'modal-position',
    scrollable ? 'scrollable' : null,
    small ? 'small' : null,
    large ? 'large' : null,
    fill ? 'fill' : null,
  ];

  return (
    <div>
      <div className="modal-overlay" onClick={onClickOutside} />
      <div {...remainingProps} className={classNames(myClassNames)}>
        <Component className="modal">
          {children}
        </Component>
      </div>
    </div>
  );
}

export default Modal;