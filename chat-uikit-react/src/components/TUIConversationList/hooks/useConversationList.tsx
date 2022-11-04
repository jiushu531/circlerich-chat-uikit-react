import React, { useEffect, useState } from 'react';
import TIM from '../../../@types/index';

function useConversationList(
  tim: TIM,
  activeConversationHandler?:(
    conversationList: Array<TIM>,
    setConversationList: React.Dispatch<React.SetStateAction<Array<TIM>>>,
  ) => void,
) {
  const [conversationList, setConversationList] = useState([]);
  const queryConversation = async (queryType?: string) => {
    if (queryType === 'reload') {
      setConversationList([]);
    }
    const offset = queryType === 'reload' ? 0 : conversationList.length;

    const res = await tim?.getConversationList();
    if (res?.code === 0) {
      const resConversationList = res.data.conversationList.filter(
        (item) => item.type !== TIM.TYPES.CONV_SYSTEM,
      );
      const newConversationList = queryType === 'reload'
        ? resConversationList
        : [...conversationList, resConversationList];
      setConversationList(newConversationList);
      if (!offset && activeConversationHandler) {
        activeConversationHandler(newConversationList, setConversationList);
      }
    }
  };
  useEffect(() => {
    queryConversation('reload');
  }, [tim]);
  return {
    conversationList,
    setConversationList,
  };
}

export default useConversationList;
