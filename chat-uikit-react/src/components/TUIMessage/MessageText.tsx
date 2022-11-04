import React, { PropsWithChildren } from 'react';
import TIM from '../../@types';
import type { IMessage } from './TUIMessage';

export interface MessageContextProps {
  context?: TIM,
  message?: IMessage,
  className?: string,
}

function MessageTextWithContext <T extends MessageContextProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    context,
    message,
    children,
  } = props;

  return (
    <div className={`bubble message-text bubble-${message.flow}`}>
      <div className="message-text-content">
        {context.text.map((item, index) => {
          const key = message.ID + index;
          if (item.name === 'text') {
            return <span className="text-box" key={item.text + key}>{item.text}</span>;
          }
          return <img className="text-img" key={item.src + key} src={item.src} alt="" />;
        })}
      </div>
      {children}
    </div>
  );
}

const MemoizedMessageText = React.memo(MessageTextWithContext) as
typeof MessageTextWithContext;

export function MessageText(props:MessageContextProps):React.ReactElement {
  return (
    <MemoizedMessageText {...props} />
  );
}
