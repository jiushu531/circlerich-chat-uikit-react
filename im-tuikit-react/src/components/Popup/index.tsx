import React, { useLayoutEffect, useRef } from 'react';
import TIM from '../../@types';

import './styles/index.scss';

interface PopupProps {
  className?: string,
  show?: boolean,
  close?: (e) => void,
  root?: TIM,
  handleVisible?: (isVisible:TIM) => void,
}

export function Popup<
T extends PopupProps
>(props:React.PropsWithChildren<T>):React.ReactElement {
  const {
    show,
    close,
    children,
    className,
    root,
    handleVisible,
  } = props;

  const popup = useRef<HTMLInputElement>();

  useLayoutEffect(() => {
    if (show) {
      window.addEventListener('mouseup', close, false);
      popup?.current?.addEventListener('mouseup', stopImmediatePropagation);
    } else {
      window.removeEventListener('mouseup', close, false);
      popup?.current?.removeEventListener('mouseup', stopImmediatePropagation);
    }
    return () => {
      window.removeEventListener('mouseup', close, false);
      popup?.current?.removeEventListener('mouseup', stopImmediatePropagation);
    };
  }, [show]);

  useLayoutEffect(() => {
    const io = new IntersectionObserver(([change]) => {
      const { boundingClientRect, rootBounds } = change;
      if (!handleVisible) return;
      handleVisible({
        left: boundingClientRect.x < rootBounds.width,
        top: (boundingClientRect.bottom + boundingClientRect.height) < rootBounds.bottom,
      });
    }, {
      root,
      threshold: [1],
    });

    if (popup && show) {
      io.observe(popup?.current);
    }
    return () => {
      io.disconnect();
    };
  }, [popup, show]);

  const stopImmediatePropagation = (e) => {
    e.stopPropagation();
  };

  return show && (
    <div role="button" tabIndex={0} className={`popup ${className}`} ref={popup}>
      {children}
    </div>
  );
}
