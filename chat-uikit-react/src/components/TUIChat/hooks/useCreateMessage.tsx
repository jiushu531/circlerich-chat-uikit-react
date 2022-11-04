import { useCallback } from 'react';
import TIM from '../../../@types';
import { IConversationValue } from '../../../context';

export interface CreateMessageProps {
  tim?: TIM,
  conversation?: IConversationValue,
  to?: string,
  type?: string,
}
export interface BasicCreateMessageProps {
  needReadReceipt?: boolean,
  receiverList?: Array<string>,
  priority?: string,
  onProgress?: (num:number) => void,
  [propName: string]: TIM,
}

export interface CreateTextMessageProps extends BasicCreateMessageProps{
  payload: {
    text: string,
  }
}

export interface CreateFaceMessageProps extends BasicCreateMessageProps{
  payload: {
    index: number,
    data: string,
  }
}

export interface CreateUploadMessageProps extends BasicCreateMessageProps{
  payload: {
    file: HTMLInputElement | File,
  }
}

export function useCreateMessage<T extends CreateMessageProps>(props:T) {
  const {
    tim,
    conversation,
    to = '',
    type: propType,
  } = props;

  const { type: conversationType, userProfile, groupProfile } = conversation;

  const type = propType || conversationType;

  const basicConfig = {
    to: to || (type === TIM.TYPES.CONV_C2C ? userProfile?.userID : groupProfile?.groupID),
    conversationType: type,
  };

  const createTextMessage = useCallback((params: CreateTextMessageProps) => tim.createTextMessage({
    ...basicConfig,
    ...params,
  }), [tim]);

  const createFaceMessage = useCallback((params: CreateFaceMessageProps) => tim.createFaceMessage({
    ...basicConfig,
    ...params,
  }), [tim]);

  const createImageMessage = useCallback((
    params: CreateUploadMessageProps,
  ) => tim.createImageMessage({
    ...basicConfig,
    ...params,
  }), [tim]);

  const createVideoMessage = useCallback((
    params: CreateUploadMessageProps,
  ) => tim.createVideoMessage({
    ...basicConfig,
    ...params,
  }), [tim]);

  const createFileMessage = useCallback((
    params: CreateUploadMessageProps,
  ) => tim.createFileMessage({
    ...basicConfig,
    ...params,
  }), [tim]);

  return {
    createTextMessage,
    createFaceMessage,
    createImageMessage,
    createVideoMessage,
    createFileMessage,
  };
}
