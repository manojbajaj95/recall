'use client'

import { createEmbed } from '@/app/actions'
import { Button } from '@/components/tui/button'
import { Divider } from '@/components/tui/divider'
import { Description, Field, Label } from '@/components/tui/fieldset'
import { Heading } from '@/components/tui/heading'
import { Input } from '@/components/tui/input'
import { Select } from '@/components/tui/select'
import { useFormState as useActionState, useFormStatus } from 'react-dom'

export default function Home() {
  const [state, formAction] = useActionState(createEmbed, null)
  const { pending } = useFormStatus()

  const collections = [{ id: 1, name: "default" }]

  return (
    <>
      <div className="h-full space-y-2">
        <Heading>Upload Sources</Heading>
        <Divider />
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
      </div>
    </>
  )
}
