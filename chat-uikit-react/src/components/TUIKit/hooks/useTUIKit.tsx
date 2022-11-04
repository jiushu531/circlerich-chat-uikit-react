import React, { useState, useCallback, useEffect } from 'react';
import TIM from '../../../@types/index';
import { IConversationValue } from '../../../context';

export interface UseChatParams{
  tim: TIM
}
export const useTUIKit = ({ tim }:UseChatParams) => {
  const [conversation, setConversation] = useState<IConversationValue>();
  const [myProfile, setMyProfile] = useState<IConversationValue>();
  const [TUIManageShow, setTUIManageShow] = useState<boolean>(false);
  const [TUIProfileShow, setTUIProfileShow] = useState<boolean>(false);
  useEffect(() => {
    const getMyProfile = async () => {
      const res = await tim?.getMyProfile();
      setMyProfile(res?.data);
    };
    getMyProfile();
  }, [tim]);
  const setActiveConversation = useCallback(
    (activeConversation?: IConversationValue) => {
      if (activeConversation) {
        tim?.setMessageRead({ conversationID: activeConversation.conversationID });
      }
      if (conversation && (activeConversation.conversationID !== conversation.conversationID)) {
        setTUIManageShow(false);
      }
      setConversation(activeConversation);
    },
    [tim],
  );
  return {
    conversation,
    setActiveConversation,
    myProfile,
    TUIManageShow,
    setTUIManageShow,
    TUIProfileShow,
    setTUIProfileShow,
  };
};
