import React, { useRef, useState, useEffect } from 'react';

import TIM from '../../@types/index';
import { useTUIKitContext } from '../../context';
import useConversationList from './hooks/useConversationList';
import './index.scss';
import {
  ConversationPreview,
  ConversationPreviewUIComponentProps,
} from '../ConversationPreview';
import {
  ConversationListContainer,
  ConversationListContainerProps,
} from '../ConversationPreview/ConversationListContainer';
import { Profile } from '../Profile';
import { ConversationSearchInput, ConversationSearchResult } from '../ConversationSearch';
import { ConversationCreate } from '../ConversationCreate';
import { Icon, IconTypes } from '../Icon';
import { getDisplayTitle } from '../ConversationPreview/utils';
import { useConversationUpdate } from './hooks/useConversationUpdate';

interface Props {
  filters?: object,
  sort?: object,
  options?: object,
  Preview?: React.ComponentType<ConversationPreviewUIComponentProps>,
  Container?: React.ComponentType<ConversationListContainerProps>,
  onConversationListUpdated?: (
    setConversationList: React.Dispatch<React.SetStateAction<Array<TIM>>>,
    event: TIM
  ) => void,
}
export function UnMemoTUIConversationList<T extends Props>(props: T):React.ReactElement {
  const {
    Preview,
    Container = ConversationListContainer,
    onConversationListUpdated,
  } = props;
  const {
    tim, customClasses, conversation, setActiveConversation, setTUIProfileShow,
  } = useTUIKitContext('TUIConversationList');
  const [conversationUpdateCount, setConversationUpdateCount] = useState(0);
  const forceUpdate = () => setConversationUpdateCount((count) => count + 1);

  const activeConversationHandler = (
    conversationList: Array<TIM>,
    setConversationList: React.Dispatch<React.SetStateAction<Array<TIM>>>,
  ) => {
    if (!conversationList.length) {
      return;
    }
    setActiveConversation(conversation || conversationList[0]);
  };
  const {
    conversationList,
    setConversationList,
  } = useConversationList(tim, activeConversationHandler);
  useConversationUpdate(setConversationList, onConversationListUpdated, forceUpdate);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(conversationList);
  const [conversationCreated, setConversationCreated] = useState(false);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target?.value);
    if (e.target?.value) {
      const result = conversationList.filter(
        (item) => (getDisplayTitle(item) as string).includes(e.target?.value),
      );
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  };

  const handleConversationCreate = () => {
    setSearchValue('');
    setConversationCreated(true);
  };
  const { myProfile } = useTUIKitContext();
  const conversationListRef = useRef(null);
  return (
    <div className={`tui-conversation ${customClasses || ''}`} ref={conversationListRef}>
      {
        conversationCreated
          ? (
            <ConversationCreate
              conversationList={conversationList}
              setConversationCreated={setConversationCreated}
            />
          )
          : (
            <>
              <Profile profile={myProfile} handleAvatar={() => { setTUIProfileShow(true); }} />
              <div className="tui-conversation-header">
                <ConversationSearchInput
                  value={searchValue}
                  clearable
                  onChange={handleSearchValueChange}
                />
                <div className="tui-conversation-create-icon">
                  <Icon
                    onClick={handleConversationCreate}
                    type={IconTypes.CREATE}
                    height={24}
                    width={24}
                  />
                </div>
              </div>
              <Container setConversationList={setConversationList}>
                {/* eslint-disable-next-line no-nested-ternary */}
                {conversationList.length === 0 ? <div style={{ padding: '0 20px' }}>No conversation</div>
                  : searchValue
                    ? (
                      <ConversationSearchResult
                        Preview={Preview}
                        searchValue={searchValue}
                        result={searchResult}
                      />
                    )
                    : conversationList.map((item: TIM) => {
                      const previewProps = {
                        activeConversation: conversation,
                        conversation: item,
                        setActiveConversation,
                        Preview,
                        conversationUpdateCount,
                      };
                      return (
                        <ConversationPreview key={item.conversationID} {...previewProps} />
                      );
                    })}
              </Container>
            </>
          )
      }
    </div>
  );
}
export const TUIConversationList = React.memo(UnMemoTUIConversationList);
