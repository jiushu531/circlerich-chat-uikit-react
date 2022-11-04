import TIM from '../../@types';
import constant from '../../constants';
import type { TUIChatStateContextValue } from '../../context';
import type { IMessage } from '../TUIMessage';
import { JSONStringToParse } from '../untils';

export const handleMessage = (messageList:Array<IMessage>):Array<IMessage> => {
  let customPayloadData = null;
  return messageList.filter((item) => {
    if (item.type === TIM.TYPES.MSG_CUSTOM) {
      customPayloadData = JSONStringToParse(item?.payload?.data);
    }
    if (customPayloadData && customPayloadData?.businessID === constant.TYPE_TYPING) {
      return false;
    }
    return true;
  });
};

export const handleMessageList = (
  list:Array<IMessage>,
  state:TUIChatStateContextValue,
) => {
  const data:TIM = {
    messageList: [],
    lastMessageID: '',
    isSameLastMessageID: false,
  };
  if (list.length <= 1) {
    data.messageList = list;
  }
  data.messageList = [list[list.length - 1]];
  for (let i = list.length - 2; i >= 0; i -= 1) {
    if (data.messageList.every((item) => (item?.ID !== list[i]?.ID))) {
      data.messageList.unshift(list[i]);
    }
  }
  if (data.messageList.length >= 1) {
    data.lastMessageID = data?.messageList[data.messageList.length - 1]?.ID;
  }
  data.messageList = data.messageList.filter((item) => !item?.isDeleted);
  data.isSameLastMessageID = data?.lastMessageID === state?.lastMessageID;
  return data;
};

export const handleEditMessage = (
  messageList: Array<IMessage>,
  message: IMessage,
) => {
  const list = [...messageList];
  const index = list.findIndex((item:IMessage) => item?.ID === message?.ID);
  list[index] = message;
  return list;
};

export const handleRemoveMessage = (
  messageList: Array<IMessage>,
  message: IMessage,
) => {
  const list = [...messageList];
  const index = list.findIndex((item:IMessage) => item?.ID === message?.ID);
  list.splice(index, 1);
  return list;
};
