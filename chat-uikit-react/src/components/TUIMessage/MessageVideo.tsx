import React, { PropsWithChildren } from 'react';
import type { MessageContextProps } from './MessageText';

function MessageVideoWithContext <T extends MessageContextProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    context,
    message,
    children,
  } = props;

  return (
    <div className="message-video">
      <video muted controls src={context.url} />
      {children}
    </div>
  );
}

const MemoizedMessageVideo = React.memo(MessageVideoWithContext) as
typeof MessageVideoWithContext;

export function MessageVideo(props:MessageContextProps):React.ReactElement {
  return (
    <MemoizedMessageVideo {...props} />
  );
}
