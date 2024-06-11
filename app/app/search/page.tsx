"use client"

import { SearchBar } from "./SearchDialog"
import { getRelevantContent } from "@/app/actions"

export default function Home() {

  return (
    <>
      <main className="h-full">
        <SearchBar getRelevantContent={getRelevantContent} />
      </main>
    </>
  )
}
