import React, { PropsWithChildren } from 'react';
import TIM from '../../@types/index';
import { useTUIKit } from './hooks/useTUIKit';
import { useCreateTUIKitContext } from './hooks/useCreateTUIKitContext';
import { TUIKitProvider } from '../../context/TUIKitContext';
import './styles/index.scss';
import { TUIConversation } from '../TUIConversation';
import { TUIChat } from '../TUIChat';
import { TUIManage } from '../TUIManage';

export interface ChatProps {
    tim: TIM,
    customClasses?: unknown
}
export function TUIKit<
  T extends ChatProps
  >(
  props:PropsWithChildren<T>,
):React.ReactElement {
  const { children, tim, customClasses } = props;
  const {
    conversation,
    setActiveConversation,
    myProfile,
    TUIManageShow,
    setTUIManageShow,
    TUIProfileShow,
    setTUIProfileShow,
  } = useTUIKit({ tim });
  const chatContextValue = useCreateTUIKitContext({
    tim,
    conversation,
    setActiveConversation,
    customClasses,
    myProfile,
    TUIManageShow,
    setTUIManageShow,
    TUIProfileShow,
    setTUIProfileShow,
  });

  return (
    <TUIKitProvider value={chatContextValue}>
      <div className="tui-kit">
        {children || (
          <>
            <TUIConversation />
            <TUIChat />
            <TUIManage />
          </>
        )}
      </div>
    </TUIKitProvider>
  );
}
