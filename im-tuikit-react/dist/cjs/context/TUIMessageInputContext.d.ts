import React, { ChangeEventHandler, KeyboardEventHandler, MutableRefObject, PropsWithChildren } from 'react';
import { EmojiData } from '../components/TUIMessageInput/hooks/useEmojiPicker.js';
import { filesData } from '../components/TUIMessageInput/hooks/useUploadPicker.js';
import { MESSAGE_TYPE_NAME } from '../constants.js';

interface dispatchParams {
    type: string;
    value?: string;
}
interface TUIMessageInputContextValue {
    text?: string;
    disabled?: boolean;
    dispatch?: (params: dispatchParams) => void;
    handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
    handleSubmit?: (event: React.BaseSyntheticEvent) => void;
    handleKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
    textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>;
    onSelectEmoji?: (emoji: EmojiData) => void;
    sendFaceMessage?: (emoji: EmojiData) => void;
    sendUploadMessage?: (file: filesData, type: MESSAGE_TYPE_NAME) => void;
    insertText?: (textToInsert: string) => void;
    setText?: (textToInsert: string) => void;
    focus?: boolean;
    plugins?: Array<React.ReactElement>;
    showNumber?: number;
    MoreIcon?: React.ReactElement;
    handlePasete?: (e: ClipboardEvent) => void;
}
declare const TUIMessageInputContext: React.Context<TUIMessageInputContextValue>;
declare function TUIMessageInputContextProvider({ children, value }: PropsWithChildren<{
    value: TUIMessageInputContextValue;
}>): React.ReactElement;
declare function useTUIMessageInputContext(componentName?: string): TUIMessageInputContextValue;

export { TUIMessageInputContext, TUIMessageInputContextProvider, TUIMessageInputContextValue, useTUIMessageInputContext };
