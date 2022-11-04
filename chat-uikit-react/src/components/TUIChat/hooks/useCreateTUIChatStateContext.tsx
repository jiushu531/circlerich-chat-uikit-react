import { useMemo } from 'react';
import TIM from '../../../@types';
import { TUIChatStateContextValue } from '../../../context';

interface CreateTUIChatStateContextProp extends TUIChatStateContextValue {
  tim?: TIM,
}

function useCreateTUIChatStateContext(props:CreateTUIChatStateContextProp) {
  const {
    tim,
    conversation,
    messageList,
    messageListRef,
    ...state
  } = props;
  const TUIChatStateContext = useMemo(() => ({
    tim,
    conversation,
    messageList,
    messageListRef,
    ...state,
  }), [
    tim,
    conversation,
    messageList,
    messageListRef,
    state,
  ]);

  return TUIChatStateContext;
}

export default useCreateTUIChatStateContext;
