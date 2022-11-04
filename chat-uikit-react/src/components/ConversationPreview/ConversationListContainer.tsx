import React from 'react';
import TIM from '../../@types/index';
import './styles/index.scss';

export interface ConversationListContainerProps {
  error?: Error | null,
  loading?: boolean,
  setConversationList?: React.Dispatch<React.SetStateAction<TIM>>
}

export function ConversationListContainer<
  T extends ConversationListContainerProps
  >(props: React.PropsWithChildren<T>) {
  const { children } = props;
  return (
    <div className="conversation-list-container">
      {children}
    </div>
  );
}
