import React from 'react';
import { GroupType } from '../components/ConversationCreate';
import TIM from '../@types';

export interface CreateGroupConversationParams {
  name: string,
  type?: GroupType,
  groupID?: string,
  introduction?: string,
  notification?: string,
  avatar?: string,
  maxMemberNum?: number,
  joinOption?: string,
  memberList?: Array<object>,
  groupCustomField?: Array<object>,
  isSupportTopic?: boolean,
}
export const useConversation = (tim) => {
  const createConversation = async (params: string | CreateGroupConversationParams) => {
    // create c2c conversation
    if (typeof params === 'string') {
      const { data } = await tim.getConversationProfile(params);
      return data.conversation;
    }
    // create group conversation
    const {
      name, type, groupID, introduction, notification, avatar, maxMemberNum, joinOption,
      memberList = [], groupCustomField = [], isSupportTopic,
    } = params;
    const res = await tim.createGroup({
      name,
      type,
      groupID,
      introduction,
      notification,
      avatar,
      maxMemberNum,
      joinOption,
      memberList,
      groupCustomField,
      isSupportTopic,
    });
    const { groupID: createdGroupId } = res.data.group;
    if (type === TIM.TYPES.GRP_AVCHATROOM) {
      await tim.joinGroup({ groupID: createdGroupId, type: TIM.TYPES.GRP_AVCHATROOM });
    }
    const { data } = await tim.getConversationProfile(`GROUP${createdGroupId}`);
    return data.conversation;
  };
  const pinConversation = (
    options:{conversationID: string, isPinned:boolean},
  ) => tim.pinConversation(options);
  const deleteConversation = (conversationID: string) => tim.deleteConversation(conversationID);
  return {
    createConversation,
    pinConversation,
    deleteConversation,
  };
};
