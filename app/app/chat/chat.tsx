'use client'

import { MarkdownRenderer } from '@/components/Markdown'
import { Button } from '@/components/tui/button'
import { Description, Field, Label } from '@/components/tui/fieldset'
import { Input } from '@/components/tui/input'
import { useChat } from 'ai/react'

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  return (
    <>
      {messages.map((message) => (
        <div key={message.id} className="rounded border p-2">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          <MarkdownRenderer markdown={message.content} />
        </div>
      ))}
      <form className="space-y-2" onSubmit={handleSubmit}>
        <Field>
          <Label>Ask AI</Label>
          <Description>Ask something</Description>
          <Input name="prompt" value={input} onChange={handleInputChange} id="input" />
        </Field>
        <Button type="submit" disabled={isLoading}>
          Ask
        </Button>
      </form>
    </>
  )
}
