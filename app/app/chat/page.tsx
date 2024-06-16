import { Divider } from '@/components/tui/divider'
import { Heading } from '@/components/tui/heading'
import { Chat } from './chat'

export default async function Home() {
  return (
    <div className="h-full space-y-2">
      <Heading>Chat with your Library</Heading>
      <Divider />
      <Chat />
    </div>
  )
}
