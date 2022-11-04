import React, { PropsWithChildren } from 'react';
import TIM from '../@types/index.d.js';
import { EmptyStateIndicatorProps } from '../components/EmptyStateIndicator/EmptyStateIndicator.js';
import { TUIChatHeaderDefaultProps } from '../components/TUIChatHeader/TUIChatHeaderDefault.js';

interface ComponentContextValue {
    TUIMessage?: React.ComponentType<TIM>;
    TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>;
    EmptyStateIndicator?: React.ComponentType<EmptyStateIndicatorProps>;
    TUIMessageInput?: React.ComponentType;
    MessageContext?: React.ComponentType<TIM>;
    InputPlugins?: React.ComponentType<TIM>;
    MessagePlugins?: React.ComponentType<TIM>;
    InputQuote?: React.ComponentType<TIM>;
}
declare const ComponentContext: React.Context<ComponentContextValue>;
declare function ComponentProvider({ children, value, }: PropsWithChildren<{
    value: ComponentContextValue;
}>): JSX.Element;
declare function useComponentContext(componentName?: string): ComponentContextValue;

export { ComponentContext, ComponentContextValue, ComponentProvider, useComponentContext };
