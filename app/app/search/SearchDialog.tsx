'use client'

import { MarkdownRenderer } from '@/components/Markdown'
import { Button } from '@/components/tui/button'
import { Field } from '@/components/tui/fieldset'
import { Input } from '@/components/tui/input'
import { Frown, Loader, Search } from 'lucide-react'
import * as React from 'react'
import { useFormState as useActionState, useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  if (pending)
    return (
      <div className="relative ml-2 flex h-5 w-5 animate-spin">
        <Loader />
      </div>
    )
  return (
    <Button type="submit" disabled={pending}>
      Search
    </Button>
  )
}

const Results = ({ results }: { results: [] }) => {
  if (!results) return <NoResultsFound />
  return (
    <div className="items-center gap-4 overflow-auto dark:text-white">
      {results.map((item, index) => (
        <div key={index} className="space-y-2 border p-4">
          <MarkdownRenderer markdown={item} />
        </div>
      ))}
    </div>
  )
}

const NoResultsFound = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 p-2 text-center">
        <Frown width={18} />
      </span>
      <span className="text-slate-700 dark:text-slate-100">Sad news, the search has failed! Please try again.</span>
    </div>
  )
}

export function SearchBar({ getRelevantContent }: any) {
  const [state, formAction] = useActionState(getRelevantContent, null)
  const [isAtTop, setIsAtTop] = React.useState(true)

  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Search your content</h2>
      <form action={formAction} className="mx-auto flex flex-col justify-center space-y-2">
        <div className="flex items-center justify-center">
          <Search />
          <Field className="mx-4 grow">
            <Input placeholder="Search your library..." name="query" id="query" />
          </Field>
          <SubmitButton />
        </div>
        <div className="flex justify-center"></div>
      </form>
      <Results results={state?.message || []} />
    </>
  )
}
