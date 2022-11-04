import React, { ReactEventHandler, PropsWithChildren } from 'react';
import { IMessage } from '../components/TUIMessageInput/TUIMessageInput.js';

interface TUIMessageContextValue {
    message?: IMessage;
    handleDelete?: ReactEventHandler;
    CustemElement?: React.ComponentType<{
        message: IMessage;
    }>;
    TextElement?: React.ComponentType<{
        message: IMessage;
    }>;
    ImageElement?: React.ComponentType<{
        message: IMessage;
    }>;
    VideoElement?: React.ComponentType<{
        message: IMessage;
    }>;
    AudioElement?: React.ComponentType<{
        message: IMessage;
    }>;
    FileElement?: React.ComponentType<{
        message: IMessage;
    }>;
    MergerElement?: React.ComponentType<{
        message: IMessage;
    }>;
    LocationElement?: React.ComponentType<{
        message: IMessage;
    }>;
    FaceElement?: React.ComponentType<{
        message: IMessage;
    }>;
}
declare const TUIMessageContext: React.Context<TUIMessageContextValue>;
declare function TUIMessageContextProvider({ children, value }: PropsWithChildren<{
    value: TUIMessageContextValue;
}>): React.ReactElement;
declare function useTUIMessageContext(componentName?: string): TUIMessageContextValue;

export { TUIMessageContext, TUIMessageContextProvider, TUIMessageContextValue, useTUIMessageContext };
