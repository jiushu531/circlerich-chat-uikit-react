import React, { PropsWithChildren, useContext, MutableRefObject } from 'react';
import TIM from '../@types';
import { OperateMessageParams } from '../components/TUIChat/hooks/useHandleMessage';

export interface IConversationValue {
  conversationID?: string,
  type?: string,
  userProfile?: TIM,
  groupProfile?: TIM,
  [propName: string]: TIM,
}

export interface TUIChatStateContextValue {
  conversation?: IConversationValue,
  messageList?: Array<TIM>,
  nextReqMessageID?: string,
  isCompleted?: boolean,
  init?: boolean,
  highlightedMessageId?: string,
  lastMessageID?:string,
  isSameLastMessageID?: boolean,
  messageListRef?: TIM,
  textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>,
  operateData?: OperateMessageParams,
  noMore?: boolean,
}

export const TUIChatStateContext = React.createContext<TUIChatStateContextValue>(null);
export function TUIChatStateContextProvider({ children, value }:PropsWithChildren<{
    value: TUIChatStateContextValue
}>):React.ReactElement {
  return (
    <TUIChatStateContext.Provider value={value}>
      {children}
    </TUIChatStateContext.Provider>
  );
}

export function useTUIChatStateContext(componentName?:string)
:TUIChatStateContextValue {
  const contextValue = useContext(TUIChatStateContext);
  if (!contextValue && componentName) {
    return {} as TUIChatStateContextValue;
  }
  return (contextValue as unknown) as TUIChatStateContextValue;
}
