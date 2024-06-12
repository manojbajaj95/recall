'use client'

import * as React from 'react'
import { Button } from '@/components/tui/button'
import { Input } from '@/components/ui/input'
import { Loader, Frown, CornerDownLeft, Search, Wand } from 'lucide-react'
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { Field, Label } from '@/components/tui/fieldset'
import { MarkdownRenderer } from '@/components/Markdown'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  if (pending) return (
    <div className="animate-spin relative flex w-5 h-5 ml-2">
      <Loader />
    </div>
  )
  return (<Button type="submit" disabled={pending}>Search</Button>)
}




const Results = ({ results }: { results: [] }) => {
  if (!results) return <NoResultsFound />
  return (
    <div className="items-center gap-4 dark:text-white overflow-auto">
      {results.map((item, index) =>
        <div key={index} className='border p-4 space-y-2'>
          <MarkdownRenderer markdown={item} />
        </div>)
      }
    </div>
  )
}



const NoResultsFound = () => {
  return (<div className="flex items-center gap-4">
    <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
      <Frown width={18} />
    </span>
    <span className="text-slate-700 dark:text-slate-100">
      Sad news, the search has failed! Please try again.
    </span>
  </div>
  )
}

export function SearchBar({ getRelevantContent }: any) {

  const [state, formAction] = useActionState(getRelevantContent, null)
  const [isAtTop, setIsAtTop] = React.useState(true);

  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Search your content</h2>
      <form action={formAction} className='space-y-2 mx-auto flex flex-col justify-center'>
        <div className='flex items-center justify-center '>
          <Search />
          <Field className='grow mx-4'>
            <Input placeholder='Search your library...' name='query' id='query' />
          </Field>
          <SubmitButton />
        </div>
        <div className='flex justify-center'>

        </div>
      </form>
      <Results results={state?.message || []} />
    </>
  )
}
