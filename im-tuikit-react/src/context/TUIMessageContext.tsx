import React, { PropsWithChildren, ReactEventHandler, useContext } from 'react';
import { IMessage } from '../components';

export interface TUIMessageContextValue {
  message?: IMessage,
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

export const TUIMessageContext = React.createContext<TUIMessageContextValue>(undefined);
export function TUIMessageContextProvider({ children, value }:PropsWithChildren<{
    value: TUIMessageContextValue
}>):React.ReactElement {
  return (
    <TUIMessageContext.Provider value={value}>
      {children}
    </TUIMessageContext.Provider>
  );
}

export function useTUIMessageContext(componentName?:string)
:TUIMessageContextValue {
  const contextValue = useContext(TUIMessageContext);
  if (!contextValue && componentName) {
    return {} as TUIMessageContextValue;
  }
  return (contextValue as unknown) as TUIMessageContextValue;
}
