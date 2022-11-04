import React, { PropsWithChildren } from 'react';
import { IConversationValue } from '../../context/TUIChatStateContext.js';
import { TUIChatHeaderDefaultProps } from './TUIChatHeaderDefault.js';

interface TUIChatHeaderProps {
    title?: string;
    TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>;
    conversation?: IConversationValue;
}
declare function UnMemoizedTUIChatHeader<T extends TUIChatHeaderProps>(props: PropsWithChildren<T>): React.ReactElement;
declare const TUIChatHeader: typeof UnMemoizedTUIChatHeader;

export { TUIChatHeader };
