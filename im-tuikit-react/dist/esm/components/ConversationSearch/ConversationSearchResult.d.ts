import React from 'react';
import TIM from '../../@types/index.d.js';
import { ConversationPreviewUIComponentProps } from '../ConversationPreview/ConversationPreview.js';

interface ConversationSearchResultProps {
    result: Array<TIM>;
    searchValue?: string;
    Preview?: React.ComponentType<ConversationPreviewUIComponentProps>;
}
declare function ConversationSearchResult(props: ConversationSearchResultProps): React.ReactElement;

export { ConversationSearchResult, ConversationSearchResultProps };
