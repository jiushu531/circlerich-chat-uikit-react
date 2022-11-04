import React, { MutableRefObject, PropsWithChildren } from 'react';
import TIM from '../../@types/index.d.js';

interface IMessage {
    ID: string;
    type: string;
    payload: TIM;
    conversationType: string;
    flow: string;
    time: number;
    status: string;
    nick?: string;
    avatar?: string;
    [propName: string]: TIM;
}
interface TUIMessageInputProps {
    disabled?: boolean;
    TUIMessageInput?: React.ComponentType;
    InputPlugins?: React.ComponentType<TIM>;
    InputQuote?: React.ComponentType<TIM>;
    focus?: boolean;
    textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>;
    plugins?: Array<React.ReactElement>;
    showNumber?: number;
    MoreIcon?: React.ReactElement;
}
declare function UnMemoizedTUIMessageInput<T extends TUIMessageInputProps>(props: PropsWithChildren<T>): React.ReactElement;
declare const TUIMessageInput: typeof UnMemoizedTUIMessageInput;

export { IMessage, TUIMessageInput, TUIMessageInputProps };
