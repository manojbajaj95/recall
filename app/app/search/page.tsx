'use client'

import { getRelevantContent } from '@/app/actions'
import { SearchBar } from './SearchDialog'

export default function Home() {
  return (
    <>
      <main className="h-full">
        <SearchBar getRelevantContent={getRelevantContent} />
      </main>
    </>
  )
}
