'use client'

import Link from 'next/link'
import { Input } from '@/components/tui/input'
import { Button } from '@/components/tui/button'
import { signInWithEmail, type State } from './actions'
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { Field, Label, ErrorMessage } from '@/components/tui/fieldset'

function SubmitEmail() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Logging In...' : 'Enter your Email'}
    </Button>
  )
}

const SignUpEmail = () => {
  const [state, formAction] = useActionState<State, FormData>(signInWithEmail, null)

  return (
    <form action={formAction}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Field>
            <Label>Email</Label>
            <Input placeholder="johndoe@example.com" id="email" name="email" />
            {state?.message && <ErrorMessage>{state.message}</ErrorMessage>}
          </Field>
          <SubmitEmail />
        </div>
      </div>
    </form>
  )
}

export default function AuthenticationPage() {
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
          <p className="text-sm text-muted-foreground">Recall is currently invite only. Please use the same email</p>
        </div>
        <div>
          <SignUpEmail />
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
