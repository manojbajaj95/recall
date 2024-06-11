"use client"

import { Input } from "@/components/tui/input"
import { Description, Field, FieldGroup, Fieldset, Label, Legend } from '@/components/tui/fieldset'
import { Button } from "@/components/tui/button"
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { createEmbed } from "@/app/actions"

type Profile = {
  first_name: string,
  last_name: string,
  email: string,
}

export default function Home() {
  const [state, formAction] = useActionState(createEmbed, null)
  const { pending } = useFormStatus()

  return (
    <>
      <main className="flex flex-col justify-between items-center p-24 h-full">
        <form action={formAction}>
          <div className="flex flex-col">
            <FieldGroup>
              <Field>
                <Label>First Name</Label>
                <Input id="first_name" name="first_name" placeholder="Enter your first name" />
              </Field>
              <Field>
                <Label>Last Name</Label>
                <Input id="last_name" name="last_name" placeholder="Enter your last name" />
              </Field>
              <Field>
                <Label>Email</Label>
                <Input id="email" name="email" placeholder="Enter your email" />
              </Field>
            </FieldGroup>
            {state?.message}
            <Button type="submit" disabled={pending}>
              Save
            </Button>
          </div>
        </form>
      </main>
    </>
  )
}

