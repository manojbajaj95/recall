'use client'

import { MarkdownRenderer } from '@/components/Markdown'
import { Button } from '@/components/tui/button'

import { Input } from '@/components/tui/input'
import { UserIcon } from '@heroicons/react/20/solid'
import { useChat } from '@ai-sdk/react'

const UserMessage = ({ message }: { message: any }) => {
  return (
    <div className="bg-gray-100 p-2 flex items-center">
      <UserIcon className="h-8 w-8 mr-4" />
      <p>{message.content}</p>
    </div>
  )
}
const SystemMessage = ({ message }: { message: any }) => {
  return (
    <div className="p-2 flex items-center">
      <div>
        <MarkdownRenderer markdown={message.content} />
      </div>
    </div>
  )
}

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  return (
    <div className="flex flex-col">
      <div id="messages" className="space-y-2 grow">
        {messages.map((message) => (
          <>{message.role === 'user' ? <UserMessage message={message} /> : <SystemMessage message={message} />}</>
        ))}
      </div>
      <form className="flex p-4" onSubmit={handleSubmit}>
        <Input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
          placeholder="Ask a Question"
          className="grow mr-4"
        />
        <Button type="submit" disabled={isLoading}>
          Ask
        </Button>
      </form>
    </div>
  )
}
