import React, { useEffect, useState } from 'react';
import TIM from '../../../@types';

interface EnrichedMessageListProps {
  messageList: Array<TIM>;
}

function useEnrichedMessageList(props:EnrichedMessageListProps) {
  const { messageList } = props;

  return {
    messageList,
  };
}

export default useEnrichedMessageList;
