import { useLayoutEffect } from 'react';
import TIM from '../../../@types';
import { useTUIKitContext } from '../../../context';

export function useMessageReceviedListener(
  setMessageList:(event?: TIM) => void,
  customHandler?: (
    updateMessage: (event?: TIM) => void,
    event: TIM,
  ) => void,
) {
  const { tim } = useTUIKitContext('useMessageReceviedListener');
  useLayoutEffect(() => {
    const handleMessageRecevied = (event: TIM) => {
      if (customHandler && typeof customHandler === 'function') {
        customHandler(setMessageList, event);
      } else {
        setMessageList(event.data);
      }
    };
    tim.on(TIM.EVENT.MESSAGE_RECEIVED, handleMessageRecevied, this);
    return () => {
      tim.off(TIM.EVENT.MESSAGE_RECEIVED, handleMessageRecevied, this);
    };
  }, [tim]);
}
