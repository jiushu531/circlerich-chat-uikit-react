import { Dispatch, useReducer } from 'react';
import { CONSTANT_DISPATCH_TYPE } from '../../../constants';
import type { TUIMessageInputProps } from '../TUIMessageInput';
import { useEmojiPicker } from './useEmojiPicker';
import { useMessageInputText } from './useMessageInputText';
import { useUploadPicker } from './useUploadPicker';

export interface IbaseStateProps {
  state: IinitState,
  dispatch: Dispatch<MessageInputReducerAction>,
}

export interface IinitState {
  text: string,
}

export type MessageInputReducerAction =
  | SetTextType

type SetTextType = {
  type: CONSTANT_DISPATCH_TYPE.SET_TEXT;
  getNewText: (text: string) => void
};

const initState:IinitState = { text: '' };

const reducer = (state:IinitState, action) => {
  switch (action.type) {
    case CONSTANT_DISPATCH_TYPE.SET_TEXT:
      return { ...state, text: action?.getNewText(state.text) };
    default: return state;
  }
};

export const useMessageInputState = (props:TUIMessageInputProps) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { focus, textareaRef } = props;
  const {
    handleChange,
    handleSubmit,
    handleKeyDown,
    handlePasete,
    insertText,
    setText,
  } = useMessageInputText({
    state,
    dispatch,
    textareaRef,
    focus,
  });

  const {
    onSelectEmoji,
    sendFaceMessage,
  } = useEmojiPicker({
    state,
    dispatch,
    textareaRef,
    insertText,
  });

  const {
    sendUploadMessage,
  } = useUploadPicker({
    state,
    dispatch,
  });

  return {
    ...state,
    handleChange,
    handleSubmit,
    handleKeyDown,
    handlePasete,
    onSelectEmoji,
    sendFaceMessage,
    sendUploadMessage,
    textareaRef,
    insertText,
    setText,
    focus,
  };
};
