import React from 'react';
import TIM from '../../@types/index.d.js';
import { ConversationPreviewUIComponentProps } from '../ConversationPreview/ConversationPreview.js';
import { ConversationListContainerProps } from '../ConversationPreview/ConversationListContainer.js';

interface Props {
    filters?: object;
    sort?: object;
    options?: object;
    Preview?: React.ComponentType<ConversationPreviewUIComponentProps>;
    Container?: React.ComponentType<ConversationListContainerProps>;
    onConversationListUpdated?: (setConversationList: React.Dispatch<React.SetStateAction<Array<TIM>>>, event: TIM) => void;
}
declare function UnMemoTUIConversationList<T extends Props>(props: T): React.ReactElement;
declare const TUIConversationList: React.MemoExoticComponent<typeof UnMemoTUIConversationList>;

export { TUIConversationList, UnMemoTUIConversationList };
