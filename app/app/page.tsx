"use client"

import { SearchDialog } from "@/components/SearchDialog"
import { Input, Label, Description, Field } from "@/components/tui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { createEmbed, getRelevantContent } from "../actions"
import Image from "next/image"

export default function Home() {
  const [state, formAction] = useActionState(createEmbed, null)
  const { pending } = useFormStatus()

  return (
    <>
      <main className="flex flex-col justify-between items-center p-24 h-full">
        <form action={formAction}>
          <div className="flex flex-col">
            <Field>
              <Label>Enter a URL you want to save</Label>
              <Input id="url" name="url" placeholder="https://example.com" />
            </Field>
            {state?.message}
            <Button type="submit" disabled={pending}>
              Submit
            </Button>
          </div>
        </form>
        <div className="">
          <SearchDialog getRelevantContent={getRelevantContent} />
        </div>
        <div className="py-8 w-full flex items-center justify-center space-x-6">
          <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
            <Link href="https://supabase.com" className="flex items-center justify-center">
              <p className="text-base mr-2">Built by Supabase</p>
              <Image src={'/supabase.svg'} width="20" height="20" alt="Supabase logo" />
            </Link>
          </div>
          <div className="border-l border-gray-300 w-1 h-4" />
          <div className="flex items-center justify-center space-x-4">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://github.com/supabase/supabase"
                className="flex items-center justify-center"
              >
                <Image src={'/github.svg'} width="20" height="20" alt="Github logo" />
              </Link>
            </div>
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://twitter.com/supabase"
                className="flex items-center justify-center"
              >
                <Image src={'/twitter.svg'} width="20" height="20" alt="Twitter logo" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
