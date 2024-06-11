'use client'

import * as React from 'react'
import { Button } from '@/components/tui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Loader, Frown, CornerDownLeft, Search, Wand } from 'lucide-react'
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { Field, Label } from '@/components/tui/fieldset'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkBreaks from 'remark-breaks';
import remarkMath from 'remark-math';

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (<Button type="submit" disabled={pending}>Search</Button>)
}

const Loading = () => {
  const { pending } = useFormStatus()
  if (pending) return (
    <div className="animate-spin relative flex w-5 h-5 ml-2">
      <Loader />
    </div>
  )
  return (<></>)
}

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml, remarkBreaks, remarkMath]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

const Results = ({ results }: { results: [] }) => {
  if (!results) return <NoResultsFound />

  return (
    <div className="items-center gap-4 dark:text-white overflow-auto">
      <h3 className="font-semibold">Answer:</h3>
      {results.map((item, index) =>
        <div key={index} className='border p-4'>
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

  return (
    <>
      <form action={formAction} className='space-y-2 text-center'>
        <div className='flex  items-center'>
          <Search />
          <Field className='grow'>
            <Input className="ml-4" placeholder='Search your library...' name='query' id='query' />
          </Field>
        </div>
        <SubmitButton />
        <Loading />
        <Results results={state?.message || []} />
      </form>
    </>
  )
}
