import React from 'react';
import TIM from '../../@types/index.d.js';
import { InfiniteScrollProps } from '../InfiniteScrollPaginator/InfiniteScroll.js';

interface MessageListProps extends InfiniteScrollProps {
    messageList?: Array<TIM>;
    highlightedMessageId?: string;
}
declare function TUIMessageList(props: MessageListProps): React.ReactElement;

export { TUIMessageList };
