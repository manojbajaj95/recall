import { type CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { getContext } from '@/app/actions';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  const currentMessageContent = messages[messages.length - 1].content;
  let context = ""
  if (typeof currentMessageContent === 'string') {
    const contexts = await getContext(currentMessageContent, 3, 0.5, 100);
    context = contexts.join('. ');
  }

  const result = await streamText({
    model: openai('gpt-4o'),
    system: `You are a helpful assistant. Answer the question based only on the following context: 
    <context>
      ${context}
    </context>
    `,
    messages,
  });

  return result.toAIStreamResponse();
}