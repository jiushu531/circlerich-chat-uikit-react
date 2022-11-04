import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import TIM from '../../../@types';

interface MessageListElementProps {
  enrichedMessageList: Array<TIM>;
  TUIMessage?: React.ComponentType<TIM>,
}

function useMessageListElement <T extends MessageListElementProps>(
  props: PropsWithChildren<T>,
) {
  const { enrichedMessageList, TUIMessage } = props;
  return useMemo(() => enrichedMessageList?.map((item: TIM, index:number) => {
    const key = `${JSON.stringify(item)}${index}`;
    return (
      <li className="message-list-item" key={key}>
        <TUIMessage message={item} />
      </li>
    );
  }), [enrichedMessageList]);
}

export default useMessageListElement;
