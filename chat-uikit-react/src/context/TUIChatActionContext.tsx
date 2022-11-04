import React, { PropsWithChildren, useContext } from 'react';
import { IMessage } from '../components';
import type { CreateFaceMessageProps, CreateTextMessageProps, CreateUploadMessageProps } from '../components/TUIChat/hooks/useCreateMessage';
import { OperateMessageParams } from '../components/TUIChat/hooks/useHandleMessage';

export interface TUIChatActionContextValue {
  sendMessage?: (message: IMessage) => Promise<void>,
  removeMessage?: (message: IMessage) => void,
  editLocalmessage?: (message: IMessage) => void,
  updateMessage?: (messages: Array<IMessage>) => void,
  createTextMessage?: (options: CreateTextMessageProps) => IMessage,
  createFaceMessage?: (options: CreateFaceMessageProps) => IMessage,
  createImageMessage?: (options: CreateUploadMessageProps) => IMessage,
  createVideoMessage?: (options: CreateUploadMessageProps) => IMessage,
  createFileMessage?: (options: CreateUploadMessageProps) => IMessage,
  operateMessage?: (data?: OperateMessageParams) => void,
  loadMore?: () => Promise<void>,
}

export const TUIChatActionContext = React.createContext<
TUIChatActionContextValue | undefined>(
  undefined,
);

export function TUIChatActionProvider({
  children,
  value,
}: PropsWithChildren<{
  value: TUIChatActionContextValue
}>):React.ReactElement {
  return (
    <TUIChatActionContext.Provider
      value={(value as unknown) as TUIChatActionContextValue}
    >
      {children}
    </TUIChatActionContext.Provider>
  );
}

export const useTUIChatActionContext = (
  componentName?: string,
) => {
  const contextValue = useContext(TUIChatActionContext);

  if (!contextValue) {
    return {} as TUIChatActionContextValue;
  }

  return (contextValue as unknown) as TUIChatActionContextValue;
};
