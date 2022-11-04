import React from 'react';
import { TUIConversationProvider } from '../../context/TUIConversationContext';
import { TUIConversationList } from '../TUIConversationList';
import { TUIProfile } from '../TUIProfile';

export function TUIConversation(props:React.PropsWithChildren) {
  const { children } = props;
  return (
    <TUIConversationProvider>
      {children || (
        <>
          <TUIConversationList />
          <TUIProfile />
        </>
      )}
    </TUIConversationProvider>
  );
}
