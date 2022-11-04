import React, { ReactEventHandler } from 'react';
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
interface TUIMessageProps {
    message: IMessage;
    className?: string;
    TUIMessage?: React.ComponentType;
    MessageContext?: React.ComponentType;
    MessagePlugins?: React.ComponentType;
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

export { IMessage, TUIMessageProps };
