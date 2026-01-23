import { ChatCompletionTool } from "groq-sdk/resources/chat/completions";

export interface Tool {
  definition: ChatCompletionTool;
  handler?: (args: Record<string, unknown>) => Promise<unknown>;
  type: 'client' | 'server';
}
