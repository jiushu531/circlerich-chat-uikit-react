import React from 'react';
import { ConversationPreviewUIComponentProps } from './ConversationPreview.js';

declare function unMemoConversationPreviewContent<T extends ConversationPreviewUIComponentProps>(props: T): React.ReactElement;
declare const ConversationPreviewContent: typeof unMemoConversationPreviewContent;

export { ConversationPreviewContent, unMemoConversationPreviewContent };
