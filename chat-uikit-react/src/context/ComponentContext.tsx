import React, { PropsWithChildren, useContext } from 'react';
import TIM from '../@types';
import { TUIChatHeaderDefaultProps } from '../components';
import type{ EmptyStateIndicatorProps } from '../components/EmptyStateIndicator';

export interface ComponentContextValue {
  TUIMessage?: React.ComponentType<TIM>,
  TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>,
  EmptyStateIndicator?: React.ComponentType<EmptyStateIndicatorProps>,
  TUIMessageInput?: React.ComponentType,
  MessageContext?: React.ComponentType<TIM>,
  InputPlugins?: React.ComponentType<TIM>,
  MessagePlugins?: React.ComponentType<TIM>,
  InputQuote?: React.ComponentType<TIM>,
}

export const ComponentContext = React.createContext<ComponentContextValue | undefined>(undefined);

export function ComponentProvider({
  children,
  value,
}: PropsWithChildren<{
  value: ComponentContextValue;
}>) {
  return (
    <ComponentContext.Provider value={(value as unknown) as ComponentContextValue}>
      {children}
    </ComponentContext.Provider>
  );
}

export function useComponentContext(
  componentName?: string,
) {
  const contextValue = useContext(ComponentContext);

  if (!contextValue) {
    return {} as ComponentContextValue;
  }

  return contextValue as ComponentContextValue;
}
