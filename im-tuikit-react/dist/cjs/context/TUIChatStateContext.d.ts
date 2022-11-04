import React, { MutableRefObject, PropsWithChildren } from 'react';
import TIM from '../@types/index.d.js';
import { OperateMessageParams } from '../components/TUIChat/hooks/useHandleMessage.js';

interface IConversationValue {
    conversationID?: string;
    type?: string;
    userProfile?: TIM;
    groupProfile?: TIM;
    [propName: string]: TIM;
}
interface TUIChatStateContextValue {
    conversation?: IConversationValue;
    messageList?: Array<TIM>;
    nextReqMessageID?: string;
    isCompleted?: boolean;
    init?: boolean;
    highlightedMessageId?: string;
    lastMessageID?: string;
    isSameLastMessageID?: boolean;
    messageListRef?: TIM;
    textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>;
    operateData?: OperateMessageParams;
    noMore?: boolean;
}
declare const TUIChatStateContext: React.Context<TUIChatStateContextValue>;
declare function TUIChatStateContextProvider({ children, value }: PropsWithChildren<{
    value: TUIChatStateContextValue;
}>): React.ReactElement;
declare function useTUIChatStateContext(componentName?: string): TUIChatStateContextValue;

export { IConversationValue, TUIChatStateContext, TUIChatStateContextProvider, TUIChatStateContextValue, useTUIChatStateContext };
