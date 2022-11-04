import React from 'react';
import { IConversationValue } from '../../context/TUIChatStateContext.js';

interface TUIChatHeaderDefaultProps {
    title?: string;
    avatar?: string;
    isOnline?: boolean;
    conversation?: IConversationValue;
    pluginComponentList?: Array<React.ComponentType>;
}
declare function TUIChatHeaderDefault(props: TUIChatHeaderDefaultProps): React.ReactElement;

export { TUIChatHeaderDefault, TUIChatHeaderDefaultProps };
