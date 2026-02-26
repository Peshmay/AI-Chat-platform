//implementation details for conversation repository
const conversations = new Map<string, string>();

export const conversationRepository = {
   getConversationResponseId(conversationId: string) {
      return conversations.get(conversationId);
   },
   setLastResponseId(conversationId: string, responseId: string) {
      conversations.set(conversationId, responseId);
   },
};
