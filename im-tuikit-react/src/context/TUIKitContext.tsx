import React, { PropsWithChildren, useContext } from 'react';
import type TIM from '../@types/index';
import type { IConversationValue } from './TUIChatStateContext';

export interface TUIKitContextValue {
    tim: TIM,
    conversation?: IConversationValue,
    setActiveConversation: (conversation?: TIM) => void,
    customClasses?: unknown,
    myProfile?: TIM,
    TUIManageShow?: boolean,
    setTUIManageShow?: React.Dispatch<React.SetStateAction<boolean>>,
    TUIProfileShow?: boolean,
    setTUIProfileShow?: React.Dispatch<React.SetStateAction<boolean>>,
}
export const TUIKitContext = React.createContext<TUIKitContextValue | undefined>(undefined);
export function TUIKitProvider({ children, value }:PropsWithChildren<{
    value: TUIKitContextValue
}>):React.ReactElement {
  return (
    <TUIKitContext.Provider value={(value as unknown) as TUIKitContextValue}>
      {children}
    </TUIKitContext.Provider>
  );
}
export const useTUIKitContext = (componentName?:string):TUIKitContextValue => {
  const contextValue = useContext(TUIKitContext);
  if (!contextValue && componentName) {
    return {} as TUIKitContextValue;
  }
  return (contextValue as unknown) as TUIKitContextValue;
};
