'use client'

import { createEmbed } from '@/app/actions'
import { Button } from '@/components/tui/button'
import { Description, Field, Label } from '@/components/tui/fieldset'
import { Input } from '@/components/tui/input'
import { useFormState as useActionState, useFormStatus } from 'react-dom'

export default function Home() {
  const [state, formAction] = useActionState(createEmbed, null)
  const { pending } = useFormStatus()

  return (
    <>
      <main className="h-full">
        <form action={formAction}>
          <div className="flex flex-col space-y-2">
            <Field>
              <Label>Enter a URL you want to save</Label>
              <Description>Currently only websites are supported.</Description>
              <Input id="url" name="url" placeholder="https://example.com" />
            </Field>
            {state?.message}
            <Button type="submit" disabled={pending}>
              Submit
            </Button>
          </div>
        </form>
      </main>
    </>
  )
}
