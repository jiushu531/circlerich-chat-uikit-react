import React, { PropsWithChildren, ReactEventHandler } from 'react';
import TIM from '../../@types/index';
import { useComponentContext } from '../../context';

import { TUIMessageContextProvider } from '../../context/TUIMessageContext';
import { useMessageHandler } from './hooks';

import './styles/index.scss';
import { TUIMessageDefault } from './TUIMessageDefault';
import { MessagePlugins as MessagePluginsDefault } from './MessagePlugins';
import { MessageContext as MessageContextDefault } from './MessageContext';

export interface IMessage {
  ID: string,
  type: string,
  payload: TIM,
  conversationType: string,
  flow: string,
  time: number,
  status: string,
  nick?: string,
  avatar?: string,
  [propName: string]: TIM;
}

export interface TUIMessageProps {
  message: IMessage,
  className?: string,
  TUIMessage?: React.ComponentType,
  MessageContext?: React.ComponentType,
  MessagePlugins?: React.ComponentType,
  handleDelete?: ReactEventHandler,
  CustemElement?: React.ComponentType<{message: IMessage}>,
  TextElement?: React.ComponentType<{message: IMessage}>,
  ImageElement?: React.ComponentType<{message: IMessage}>,
  VideoElement?: React.ComponentType<{message: IMessage}>,
  AudioElement?: React.ComponentType<{message: IMessage}>,
  FileElement?: React.ComponentType<{message: IMessage}>,
  MergerElement?: React.ComponentType<{message: IMessage}>,
  LocationElement?: React.ComponentType<{message: IMessage}>,
  FaceElement?: React.ComponentType<{message: IMessage}>,
}
function TUIMessageWithContext <T extends TUIMessageProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    message,
    TUIMessage: propTUIMessage,
    MessagePlugins: propMessagePlugins,
    MessageContext: propMessageContext,
    handleDelete,
    CustemElement,
    TextElement,
    ImageElement,
    VideoElement,
    AudioElement,
    FileElement,
    MergerElement,
    LocationElement,
    FaceElement,
  } = props;

  const {
    MessagePlugins: ContextMessagePlugins,
    MessageContext: ContextMessageContext,
  } = useComponentContext('TUIMessage');

  const TUIMessageUIComponent = propTUIMessage || TUIMessageDefault;
  const MessagePlugins = propMessagePlugins || ContextMessagePlugins || MessagePluginsDefault;
  const MessageContext = propMessageContext || ContextMessageContext || MessageContextDefault;

  const messageContextValue = {
    message,
    handleDelete,
    CustemElement,
    TextElement,
    ImageElement,
    VideoElement,
    AudioElement,
    FileElement,
    MergerElement,
    LocationElement,
    FaceElement,
  };
  return (
    <TUIMessageContextProvider value={messageContextValue}>
      <TUIMessageUIComponent
        message={message}
        MessageContext={MessageContext}
        MessagePlugins={MessagePlugins}
      />
    </TUIMessageContextProvider>
  );
}

const MemoizedTUIMessage = React.memo(TUIMessageWithContext) as
typeof TUIMessageWithContext;

export function TUIMessage(props:TUIMessageProps):React.ReactElement {
  const {
    message,
  } = props;
  const { handleDelMessage } = useMessageHandler({ message });
  return (
    <MemoizedTUIMessage
      handleDelete={handleDelMessage}
      {...props}
    />
  );
}
