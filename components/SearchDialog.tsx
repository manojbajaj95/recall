'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
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
import { Loader,  Frown, CornerDownLeft, Search, Wand } from 'lucide-react'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

export function SearchDialog({ getRelevantContent }: any) {
  const { pending } = useFormStatus()
  const [state, formAction] = useActionState(getRelevantContent, null)

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="min-w-[300px] flex flex-row gap-2 items-center">
            <Search width={15} className="" />
            <span className="border border-l h-5"></span>
            <span className="inline-block ml-4 grow">Search...</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search your documents</DialogTitle>
            <DialogDescription>
              Search in your saved documents with natural language
            </DialogDescription>
          </DialogHeader>
          <form action={formAction}>
            <div className="grid gap-4 py-4 text-slate-700">
              <div className="relative">
                <Input
                  placeholder="Ask a question..."
                  name="query"
                  id="query"
                  className="col-span-3"
                />
                <CornerDownLeft className="absolute top-3 right-5 h-4 w-4 text-gray-300 transition-opacity" />
              </div>
              {pending && (
                <div className="animate-spin relative flex w-5 h-5 ml-2">
                  <Loader />
                </div>
              )}

              {state?.status == 'error' && (
                <div className="flex items-center gap-4">
                  <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <Frown width={18} />
                  </span>
                  <span className="text-slate-700 dark:text-slate-100">
                    Sad news, the search has failed! Please try again.
                  </span>
                </div>
              )}

              {state?.status == 'success' && state?.message && (
                <div className="flex items-center gap-4 dark:text-white">
                  <span className="bg-green-500 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <Wand width={18} className="text-white" />
                  </span>
                  <h3 className="font-semibold">Answer:</h3>
                  {Array.isArray(state.message)
                    ? state.message.map((item, index) => <p key={index}>{item}</p>)
                    : state.message}
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" variant="default" disabled={pending}>
                Ask
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
