'use client'

import { getRelevantContent } from '@/app/actions'
import { Divider } from '@/components/tui/divider'
import { Heading } from '@/components/tui/heading'
import { SearchBar } from './SearchDialog'

export default function Home() {
  return (
    <div className="h-full space-y-2">
      <Heading>Search you Library</Heading>
      <Divider />
      <SearchBar getRelevantContent={getRelevantContent} />
    </div>
  )
}
