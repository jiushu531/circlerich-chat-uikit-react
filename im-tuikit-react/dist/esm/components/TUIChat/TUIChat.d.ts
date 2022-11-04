import React, { PropsWithChildren } from 'react';
import TIM from '../../@types/index.d.js';
import { IConversationValue } from '../../context/TUIChatStateContext.js';
import { TUIChatHeaderDefaultProps } from '../TUIChatHeader/TUIChatHeaderDefault.js';
import { TUIMessageProps } from '../TUIMessage/TUIMessage.js';
import { MessageContextProps } from '../TUIMessage/MessageContext.js';

interface TUIChatProps {
    className?: string;
    conversation?: IConversationValue;
    EmptyPlaceholder?: React.ReactElement;
    TUIMessage?: React.ComponentType<TUIMessageProps>;
    TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>;
    MessageContext?: React.ComponentType<MessageContextProps>;
    TUIMessageInput?: React.ComponentType<TIM>;
    InputPlugins?: React.ComponentType<TIM>;
    InputQuote?: React.ComponentType<TIM>;
    MessagePlugins?: React.ComponentType<TIM>;
    onMessageRecevied?: (updateMessage: (event?: TIM) => void, event: TIM) => void;
    [propName: string]: TIM;
}
declare function UnMemoizedTUIChat<T extends TUIChatProps>(props: PropsWithChildren<T>): React.ReactElement;
declare const TUIChat: typeof UnMemoizedTUIChat;

export { TUIChat };
