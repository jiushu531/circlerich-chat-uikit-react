import { useLayoutEffect, useState } from 'react';
import TIM from '../../../@types';
import { useTUIKitContext } from '../../../context';
import { JSONStringToParse } from '../../untils';

interface messageContextParams {
  message?: TIM,
}

export const useMessageReply = <T extends messageContextParams>(params:T) => {
  const {
    message,
  } = params;
  const [messageReply, setMessageReply] = useState(null);
  const [sender, setSender] = useState('');
  const [replyMessage, setReplyMessage] = useState(null);
  const [messageID, setMessageID] = useState('');

  const { tim } = useTUIKitContext('TUIChat');

  useLayoutEffect(() => {
    handleMessageReply(message);
  }, [message]);

  const handleMessageReply = (data:TIM) => {
    if (!data?.cloudCustomData) {
      return;
    }
    const cloudCustomData = JSONStringToParse(message?.cloudCustomData);
    const reply = cloudCustomData?.messageReply || '';
    if (!reply) {
      return;
    }
    setMessageReply(reply);
    setSender(reply?.messageSender);
    setMessageID(reply?.messageID);
    setReplyMessage(tim.findMessage(reply?.messageID));
  };

  return {
    messageReply,
    sender,
    replyMessage,
    messageID,
    message,
  };
};
