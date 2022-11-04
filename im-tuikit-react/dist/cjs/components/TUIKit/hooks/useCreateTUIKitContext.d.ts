import React from 'react';
import { TUIKitContextValue } from '../../../context/TUIKitContext.js';
import { IConversationValue } from '../../../context/TUIChatStateContext.js';

declare const useCreateTUIKitContext: (value: TUIKitContextValue) => {
    tim: TIM;
    conversation: IConversationValue;
    customClasses: unknown;
    setActiveConversation: (conversation?: TIM) => void;
    myProfile: TIM;
    TUIManageShow: boolean;
    setTUIManageShow: React.Dispatch<React.SetStateAction<boolean>>;
    TUIProfileShow: boolean;
    setTUIProfileShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export { useCreateTUIKitContext };
