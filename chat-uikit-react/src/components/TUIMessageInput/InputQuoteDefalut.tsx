import React, { PropsWithChildren, useCallback } from 'react';
import './styles/index.scss';

import { useTUIChatActionContext, useTUIChatStateContext } from '../../context';
import { Icon, IconTypes } from '../Icon';
import { IMessage } from './TUIMessageInput';
import { MESSAGE_OPERATE } from '../../constants';
import { useHandleQuoteMessage } from './hooks/useHandleQuoteMessage';

interface InputQuoteProps {
  message?: IMessage
}

export function InputQuoteDefalut <T extends InputQuoteProps>(
  props:PropsWithChildren<T>,
):React.ReactElement {
  const {
    message: propsMessage,
  } = props;

  const {
    operateData,
  } = useTUIChatStateContext('TUIMessageInputDefault');

  const message = propsMessage || operateData[MESSAGE_OPERATE.QUOTE];

  const { operateMessage } = useTUIChatActionContext('MessageRevokeWithContext');
  const { handleQuoteMessage } = useHandleQuoteMessage();

  const handleClose = useCallback(() => {
    operateMessage({
      [MESSAGE_OPERATE.QUOTE]: null,
    });
  }, [operateMessage]);

  if (!message) {
    return <div />;
  }

  const context = handleQuoteMessage(message);

  return (
    <div className="input-quote">
      <div className="input-quote-content">
        <label htmlFor="input-quote-content">{message?.nick || message?.from}</label>
        <span>{context?.messageAbstract}</span>
      </div>
      <Icon className="icon" width={12} height={12} type={IconTypes.CLOSE} onClick={handleClose} />
    </div>
  );
}
