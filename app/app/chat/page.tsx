"use client"

import { Button } from "@/components/tui/button"
import { Description, Field, Label } from "@/components/tui/fieldset"
import { Textarea } from "@/components/tui/textarea"
import { useChat } from 'ai/react';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkBreaks from 'remark-breaks';
import remarkMath from 'remark-math';
import { Input } from "@/components/tui/input"

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <>
      <main className="">
        {messages.map(message => (
          <div key={message.id}>
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.content}
          </div>
        ))}
        <form className="space-y-2" onSubmit={handleSubmit}>
          <Field>
            <Label>Ask AI</Label>
            <Description>Ask something</Description>
            <Input name="prompt" value={input} onChange={handleInputChange} id="input" />
          </Field>
          <Button type="submit" disabled={isLoading}>Ask</Button>
        </form>
      </main >
    </>
  )
}


