"use client"
import { Input } from "@/components/tui/input"
import { Button } from "@/components/tui/button"
import { useFormState as useActionState, useFormStatus } from "react-dom"
import { addWaitlist } from "@/app/actions"
import { Field } from "./tui/fieldset"
import Link from "next/link"



const initialState = {
  message: ""
}

export const Waitlist = () => {
  const { pending } = useFormStatus()
  const [state, action] = useActionState(addWaitlist, initialState)
  return <div className="w-full max-w-sm space-y-6">
    {state.message ? <p>{state.message}</p> : (
      <>
        <form className="space-x-2 flex" action={action}>
          <Field>
            <Input placeholder="Enter your email" required type="email" id="email" name="email" />
          </Field>
          <Button type="submit" disabled={pending}>Join the Waitlist</Button>
        </form>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Sign up to get notified when we launch.
          {/* <Link className="underline underline-offset-2" href="/tnc">
            Terms & Conditions
          </Link> */}
        </p></>
    )}

  </div>
}