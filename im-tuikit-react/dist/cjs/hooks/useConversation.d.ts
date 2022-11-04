import { GroupType } from '../components/ConversationCreate/ConversationGroupTypeInfo.js';

interface CreateGroupConversationParams {
    name: string;
    type?: GroupType;
    groupID?: string;
    introduction?: string;
    notification?: string;
    avatar?: string;
    maxMemberNum?: number;
    joinOption?: string;
    memberList?: Array<object>;
    groupCustomField?: Array<object>;
    isSupportTopic?: boolean;
}
declare const useConversation: (tim: any) => {
    createConversation: (params: string | CreateGroupConversationParams) => Promise<any>;
    pinConversation: (options: {
        conversationID: string;
        isPinned: boolean;
    }) => any;
    deleteConversation: (conversationID: string) => any;
};

export { CreateGroupConversationParams, useConversation };
