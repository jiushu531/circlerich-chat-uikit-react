import React, { PropsWithChildren } from 'react';
import { OperateMessageParams } from '../components/TUIChat/hooks/useHandleMessage.js';
import { CreateTextMessageProps, CreateFaceMessageProps, CreateUploadMessageProps } from '../components/TUIChat/hooks/useCreateMessage.js';
import { IMessage } from '../components/TUIMessageInput/TUIMessageInput.js';

interface TUIChatActionContextValue {
    sendMessage?: (message: IMessage) => Promise<void>;
    removeMessage?: (message: IMessage) => void;
    editLocalmessage?: (message: IMessage) => void;
    updateMessage?: (messages: Array<IMessage>) => void;
    createTextMessage?: (options: CreateTextMessageProps) => IMessage;
    createFaceMessage?: (options: CreateFaceMessageProps) => IMessage;
    createImageMessage?: (options: CreateUploadMessageProps) => IMessage;
    createVideoMessage?: (options: CreateUploadMessageProps) => IMessage;
    createFileMessage?: (options: CreateUploadMessageProps) => IMessage;
    operateMessage?: (data?: OperateMessageParams) => void;
    loadMore?: () => Promise<void>;
}
declare const TUIChatActionContext: React.Context<TUIChatActionContextValue>;
declare function TUIChatActionProvider({ children, value, }: PropsWithChildren<{
    value: TUIChatActionContextValue;
}>): React.ReactElement;
declare const useTUIChatActionContext: (componentName?: string) => TUIChatActionContextValue;

export { TUIChatActionContext, TUIChatActionContextValue, TUIChatActionProvider, useTUIChatActionContext };
