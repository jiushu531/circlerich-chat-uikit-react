import React from 'react';
import TIM from '../../@types/index.d.js';

interface ConversationListContainerProps {
    error?: Error | null;
    loading?: boolean;
    setConversationList?: React.Dispatch<React.SetStateAction<TIM>>;
}

export { ConversationListContainerProps };
