import React from 'react';
import TIM from '../../../@types/index.d.js';
import { IConversationValue } from '../../../context/TUIChatStateContext.js';

interface UseChatParams {
    tim: TIM;
}
declare const useTUIKit: ({ tim }: UseChatParams) => {
    conversation: IConversationValue;
    setActiveConversation: (activeConversation?: IConversationValue) => void;
    myProfile: IConversationValue;
    TUIManageShow: boolean;
    setTUIManageShow: React.Dispatch<React.SetStateAction<boolean>>;
    TUIProfileShow: boolean;
    setTUIProfileShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export { UseChatParams, useTUIKit };
