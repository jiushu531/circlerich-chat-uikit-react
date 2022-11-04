import React, {
  useCallback,
  ChangeEventHandler,
  MutableRefObject,
} from 'react';
import TIM from '../../../@types';
import { CONSTANT_DISPATCH_TYPE, MESSAGE_OPERATE } from '../../../constants';
import { useTUIChatActionContext, useTUIChatStateContext, useTUIKitContext } from '../../../context';
import { useHandleQuoteMessage } from './useHandleQuoteMessage';
import type { IbaseStateProps } from './useMessageInputState';

interface useMessageInputTextProps extends IbaseStateProps {
  focus?: boolean,
  textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>,
}

export const useMessageInputText = (props:useMessageInputTextProps) => {
  const {
    state,
    dispatch,
    focus,
    textareaRef,
  } = props;

  const { tim } = useTUIKitContext('useMessageInputText');
  const { sendMessage, createTextMessage, operateMessage } = useTUIChatActionContext('TUIMessageInput');
  const {
    operateData,
  } = useTUIChatStateContext('TUIMessageInputDefault');

  const quoteMessage = operateData[MESSAGE_OPERATE.QUOTE];
  const { handleQuoteMessage } = useHandleQuoteMessage();

  const enterCodeList = ['Enter', 'NumpadEnter'];

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      event.preventDefault();
      if (!event || !event.target) {
        return;
      }
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_TEXT,
        getNewText: (text:string) => event.target.value,
      });
    },
    [tim],
  );

  const handleSubmit = async (
    event?: React.BaseSyntheticEvent,
  ) => {
    event?.preventDefault();
    if (!state.text) {
      return;
    }
    const cloudCustomData:TIM = {};
    if (quoteMessage) {
      cloudCustomData.messageReply = handleQuoteMessage(quoteMessage);
    }
    const message = createTextMessage({
      payload: {
        text: state.text,
      },
      cloudCustomData: JSON.stringify(cloudCustomData),
    });
    sendMessage(message);
    dispatch({
      getNewText: (text:string) => '',
      type: CONSTANT_DISPATCH_TYPE.SET_TEXT,
    });
    operateMessage({
      [MESSAGE_OPERATE.QUOTE]: null,
    });
  };

  const handleKeyDown = useCallback(
    (event?:React.KeyboardEvent<EventTarget>) => {
      if (!event?.ctrlKey && enterCodeList.indexOf(event?.code) > -1) {
        event?.preventDefault();
        handleSubmit(event);
      }
      if (event?.ctrlKey && enterCodeList.indexOf(event?.code) > -1) {
        dispatch({
          type: CONSTANT_DISPATCH_TYPE.SET_TEXT,
          getNewText: (text:string) => `${text}\n`,
        });
      }
    },
    [handleSubmit, dispatch],
  );

  const handlePasete = useCallback(
    async (e: ClipboardEvent) => {
      e.preventDefault();
      if (!(e.clipboardData && e.clipboardData.items)) {
        return;
      }
      const str = e.clipboardData.getData('text');
      if (str) {
        dispatch({
          type: CONSTANT_DISPATCH_TYPE.SET_TEXT,
          getNewText: (text:string) => `${text}${str}`,
        });
      }
      //  else {
      //   for (let i = 0; i < e.clipboardData.items.length; i += 1) {
      //     const item = e.clipboardData.items[i];
      //     if (item.kind === 'file') {
      //       const f = item.getAsFile();
      //       console.log('file', f);
      //     }
      //   }
      // }
    },
    [textareaRef],
  );

  const insertText = useCallback(
    (textToInsert: string) => {
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_TEXT,
        getNewText: (text:string) => `${text}${textToInsert}`,
      });
      textareaRef?.current?.focus();
    },
    [textareaRef],
  );

  const setText = useCallback(
    (textToInsert: string) => {
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_TEXT,
        getNewText: () => `${textToInsert}`,
      });
      textareaRef?.current?.focus();
    },
    [textareaRef],
  );

  return {
    handleChange,
    handleSubmit,
    handleKeyDown,
    handlePasete,
    insertText,
    setText,
  };
};
