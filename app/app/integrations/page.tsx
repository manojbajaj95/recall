import { Divider } from '@/components/tui/divider'
import { Heading } from '@/components/tui/heading'


export default async function Integrations() {
  return (
    <div className="h-full space-y-2">
      <div className="flex">
        <Heading className="grow">Integrations</Heading>
      </div>
      <Divider />
      <div className="space-y-2 mt-4">
        Notion, Twitter
      </div>
    </div>
  )
}
