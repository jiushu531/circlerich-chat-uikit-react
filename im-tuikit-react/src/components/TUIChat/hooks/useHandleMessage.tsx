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
export interface OperateMessageParams {
  [propName: string]: IMessage,
}

export function useHandleMessage<T extends CreateMessageProps>(props:T) {
  const {
    state,
    dispatch,
  } = props;

  const operateMessage = useCallback((data: OperateMessageParams) => {
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.OPERATE_MESSAGE,
      value: data,
    });
  }, [dispatch]);

  return {
    operateMessage,
  };
}
