import React, { useContext } from 'react';
import { TUIConversationList } from '../components';

export const TUIConversationContext = React.createContext(undefined);
export function TUIConversationProvider({ children, value }:React.PropsWithChildren<{
  value?: {[key: string]: unknown}
}>) {
  return (
    <TUIConversationContext.Provider value={value}>
      {children || (
        <TUIConversationList />
      )}
    </TUIConversationContext.Provider>
  );
}
export const useTUIConversationContext = (componentName?:string) => {
  const contextValue = useContext(TUIConversationContext);
  if (!contextValue && componentName) {
    return {};
  }
  return contextValue;
};
