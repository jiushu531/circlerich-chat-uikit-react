import { Dispatch, useCallback } from 'react';
import TIM from '../../../@types';
import { CONSTANT_DISPATCH_TYPE } from '../../../constants';
import type { IConversationValue, TUIChatStateContextValue } from '../../../context';
import { IMessage } from '../../TUIMessage';
import type { ChatStateReducerAction } from '../TUIChatState';

export interface CreateMessageProps {
  tim?: TIM,
  conversation?: IConversationValue,
  state?: TUIChatStateContextValue,
  dispatch?: Dispatch<ChatStateReducerAction>,
}
export interface BasicMessageListProps {
  [propName: string]: TIM,
}

export interface GetMessageListProps extends BasicMessageListProps{
  nextReqMessageID?: string,
}

export function useHandleMessageList<T extends CreateMessageProps>(props:T) {
  const {
    tim,
    conversation,
    state,
    dispatch,
  } = props;

  const { conversationID } = conversation;

  const basicConfig = {
    conversationID,
  };

  const getMessageList = useCallback((params?: GetMessageListProps) => {
    const data = params || {};
    return tim.getMessageList({
      ...basicConfig,
      ...data,
    });
  }, [tim]);

  const updateMessage = useCallback((messageList: Array<IMessage>) => {
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_UPDATE_MESSAGE,
      value: messageList.filter((item) => (
        item?.conversationID === conversationID
      )),
    });
  }, [dispatch]);

  const removeMessage = useCallback((message: IMessage) => {
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_REMOVE_MESSAGE,
      value: message,
    });
  }, [dispatch]);

  const editLocalmessage = useCallback((message: IMessage) => {
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_EDIT_MESSAGE,
      value: message,
    });
  }, [dispatch]);

  return {
    getMessageList,
    updateMessage,
    removeMessage,
    editLocalmessage,
  };
}
