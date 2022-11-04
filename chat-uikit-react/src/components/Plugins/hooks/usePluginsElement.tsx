import React, { PropsWithChildren, useMemo } from 'react';
import TIM from '../../../@types';

interface PluginsElementProps {
  plugins?: Array<TIM>,
  showNumber?: number,
}

export function usePluginsElement <T extends PluginsElementProps>(
  props: PropsWithChildren<T>,
) {
  const { plugins, showNumber } = props;
  return useMemo(() => ({
    showPicker: plugins?.slice(0, showNumber),
    elements: plugins?.slice(showNumber),
  }), [plugins]);
}
