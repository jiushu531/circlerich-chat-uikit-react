import React from 'react';
import TIM from '../../@types/index';
import {
  ConversationPreview,
  ConversationPreviewUIComponentProps,
} from '../ConversationPreview';

export interface ConversationSearchResultProps {
  result: Array<TIM>
  searchValue?: string,
  Preview?: React.ComponentType<ConversationPreviewUIComponentProps>
}
export function ConversationSearchResult(props:ConversationSearchResultProps):React.ReactElement {
  const { result, searchValue, Preview } = props;
  return (
    <div>
      {result?.length === 0 ? (<span style={{ padding: '0 20px' }}>{`No results for "${searchValue}"`}</span>)
        : result.map((item: TIM) => {
          const previewProps = {
            conversation: item,
            Preview,
          };
          return (
            <ConversationPreview
              searchValue={searchValue}
              key={item.conversationID}
              {...previewProps}
            />
          );
        })}
    </div>
  );
}
