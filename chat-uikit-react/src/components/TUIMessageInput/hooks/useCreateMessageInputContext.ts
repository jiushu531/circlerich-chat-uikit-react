import { useMemo } from 'react';
import TIM from '../../../@types';

export const useCreateMessageInputContext = (value:TIM) => {
  const {
    textareaRef,
    handleChange,
    handleSubmit,
    handleKeyDown,
    onSelectEmoji,
    sendFaceMessage,
    disabled,
    focus,
    operateData,
    plugins,
    showNumber,
    MoreIcon,
  } = value;
  const messageInputContext = useMemo(
    () => ({
      textareaRef,
      handleChange,
      handleSubmit,
      handleKeyDown,
      onSelectEmoji,
      sendFaceMessage,
      disabled,
      focus,
      operateData,
      plugins,
      showNumber,
      MoreIcon,
      ...value,
    }),
    [
      textareaRef,
      handleChange,
      handleSubmit,
      handleKeyDown,
      onSelectEmoji,
      sendFaceMessage,
      disabled,
      focus,
      plugins,
      showNumber,
      MoreIcon,
      operateData,
    ],
  );

  return messageInputContext;
};
