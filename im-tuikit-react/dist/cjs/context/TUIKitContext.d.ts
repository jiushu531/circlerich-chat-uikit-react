import React, { PropsWithChildren } from 'react';
import TIM from '../@types/index.d.js';
import { IConversationValue } from './TUIChatStateContext.js';

interface TUIKitContextValue {
    tim: TIM;
    conversation?: IConversationValue;
    setActiveConversation: (conversation?: TIM) => void;
    customClasses?: unknown;
    myProfile?: TIM;
    TUIManageShow?: boolean;
    setTUIManageShow?: React.Dispatch<React.SetStateAction<boolean>>;
    TUIProfileShow?: boolean;
    setTUIProfileShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const TUIKitContext: React.Context<TUIKitContextValue>;
declare function TUIKitProvider({ children, value }: PropsWithChildren<{
    value: TUIKitContextValue;
}>): React.ReactElement;
declare const useTUIKitContext: (componentName?: string) => TUIKitContextValue;

export { TUIKitContext, TUIKitContextValue, TUIKitProvider, useTUIKitContext };
