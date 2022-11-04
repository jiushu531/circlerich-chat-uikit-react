import React, {
  PropsWithChildren, useEffect, useMemo, useReducer, useRef,
} from 'react';
import TIM from '../../@types';
import { useTUIKitContext } from '../../context/TUIKitContext';
import { TUIChatStateContextProvider } from '../../context/TUIChatStateContext';
import { TUIChatActionProvider } from '../../context/TUIChatActionContext';
import { ComponentProvider } from '../../context/ComponentContext';
import type { IConversationValue } from '../../context/TUIChatStateContext';
import type { TUIChatActionContextValue } from '../../context/TUIChatActionContext';
import type { ComponentContextValue } from '../../context/ComponentContext';
import useCreateTUIChatStateContext from './hooks/useCreateTUIChatStateContext';

import type { TUIChatHeaderDefaultProps } from '../TUIChatHeader/TUIChatHeaderDefault';

import {
  IMessage,
  TUIMessageProps,
  TUIMessage as TUIMessageDefault,
} from '../TUIMessage';
import type { MessageContextProps } from '../TUIMessage/MessageContext';

import './styles/index.scss';
import { CONSTANT_DISPATCH_TYPE } from '../../constants';
import { useMessageReceviedListener } from './hooks/useMessageReceviedListener';
import { chatReducer, ChatStateReducer, initialState } from './TUIChatState';

import { useCreateMessage } from './hooks/useCreateMessage';
import { useHandleMessageList } from './hooks/useHandleMessageList';
import { useHandleMessage } from './hooks/useHandleMessage';
import { Toast } from '../Toast';

import { TUIChatHeader as TUIChatHeaderElement } from '../TUIChatHeader';
import { TUIMessageList } from '../TUIMessageList';
import { TUIMessageInput as TUIMessageInputElement } from '../TUIMessageInput';
import { EmptyStateIndicator } from '../EmptyStateIndicator';

interface TUIChatProps {
  className?: string,
  conversation?: IConversationValue,
  EmptyPlaceholder?: React.ReactElement,
  TUIMessage?: React.ComponentType<TUIMessageProps>,
  TUIChatHeader?: React.ComponentType<TUIChatHeaderDefaultProps>,
  MessageContext?: React.ComponentType<MessageContextProps>,
  TUIMessageInput?: React.ComponentType<TIM>,
  InputPlugins?: React.ComponentType<TIM>,
  InputQuote?: React.ComponentType<TIM>,
  MessagePlugins?: React.ComponentType<TIM>,
  onMessageRecevied?: (
    updateMessage: (event?: TIM) => void,
    event: TIM,
  ) => void,
  [propName: string]: TIM,
}

interface TUIChatInnerProps extends TUIChatProps {
  tim?: TIM,
  key?: string;
}

function UnMemoizedTUIChat <T extends TUIChatProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    conversation: propsConversation,
    EmptyPlaceholder = <EmptyStateIndicator listType="chat" />,
  } = props;

  const { conversation: contextConversation, tim } = useTUIKitContext('TUIChat');

  const conversation = propsConversation || contextConversation;

  if (!conversation?.conversationID) return EmptyPlaceholder;

  return (
    <TUIChatInner
      tim={tim}
      {...props}
      conversation={conversation}
      key={conversation.conversationID}
    />
  );
}

function TUIChatInner <T extends TUIChatInnerProps>(
  props: PropsWithChildren<T>,
):React.ReactElement {
  const {
    tim,
    conversation,
    className,
    children,
    TUIMessage,
    TUIChatHeader,
    TUIMessageInput,
    InputPlugins,
    MessagePlugins,
    MessageContext,
    InputQuote,
    onMessageRecevied,
  } = props;

  const [state, dispatch] = useReducer<ChatStateReducer>(
    chatReducer,
    { ...initialState, conversation },
  );

  const messageListRef = useRef(null);
  const textareaRef = useRef<HTMLTextAreaElement>();
  const chatStateContextValue = useCreateTUIChatStateContext({
    tim,
    conversation,
    messageListRef,
    textareaRef,
    ...state,
  });

  const {
    createTextMessage,
    createFaceMessage,
    createImageMessage,
    createVideoMessage,
    createFileMessage,
  } = useCreateMessage({ tim, conversation });

  const {
    getMessageList,
    updateMessage,
    editLocalmessage,
    removeMessage,
  } = useHandleMessageList({
    tim, conversation, state, dispatch,
  });

  const {
    operateMessage,
  } = useHandleMessage({
    state, dispatch, editLocalmessage,
  });

  const sendMessage = async (message: IMessage) => {
    updateMessage([message]);
    try {
      const res = await tim.sendMessage(message);
      editLocalmessage(message);
    } catch (error) {
      Toast({ text: error, type: 'error' });
      editLocalmessage(message);
      throw new Error(error);
    }
  };

  const loadMore = async () => {
    if (state.isCompleted) {
      dispatch({
        type: CONSTANT_DISPATCH_TYPE.SET_NO_MORE,
        value: true,
      });
      return;
    }
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_HIGH_LIGHTED_MESSAGE_ID,
    });
    const historyMessageData = await getMessageList({
      nextReqMessageID: state.nextReqMessageID,
    });
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_HISTORY_MESSAGELIST,
      value: historyMessageData.data.messageList,
    });
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_IS_COMPLETE,
      value: historyMessageData.data.isCompleted,
    });
    dispatch({
      type: CONSTANT_DISPATCH_TYPE.SET_NEXT_REQ_MESSAGE_ID,
      value: historyMessageData.data.nextReqMessageID,
    });
  };

  useMessageReceviedListener(updateMessage, onMessageRecevied);

  useEffect(() => {
    (async () => {
      await loadMore();
    })();
  }, []);

  const chatActionContextValue: TUIChatActionContextValue = useMemo(
    () => ({
      sendMessage,
      removeMessage,
      editLocalmessage,
      updateMessage,
      createTextMessage,
      createFaceMessage,
      createImageMessage,
      createVideoMessage,
      createFileMessage,
      operateMessage,
      loadMore,
    }),
    [
      sendMessage,
      removeMessage,
      updateMessage,
      createTextMessage,
      createFaceMessage,
      createImageMessage,
      createVideoMessage,
      createFileMessage,
      editLocalmessage,
      operateMessage,
      loadMore,
    ],
  );

  const componentContextValue: ComponentContextValue = useMemo(
    () => ({
      TUIMessage: TUIMessage || TUIMessageDefault,
      MessageContext,
      InputPlugins,
      MessagePlugins,
      TUIChatHeader,
      TUIMessageInput,
      InputQuote,
    }),
    [],
  );

  return (
    <div className={`chat ${className}`}>
      <TUIChatStateContextProvider value={chatStateContextValue}>
        <TUIChatActionProvider value={chatActionContextValue}>
          <ComponentProvider value={componentContextValue}>
            {children || (
            <>
              <TUIChatHeaderElement />
              <TUIMessageList />
              <TUIMessageInputElement />
            </>
            )}

          </ComponentProvider>
        </TUIChatActionProvider>
      </TUIChatStateContextProvider>
    </div>
  );
}

export const TUIChat = React.memo(UnMemoizedTUIChat) as typeof UnMemoizedTUIChat;
