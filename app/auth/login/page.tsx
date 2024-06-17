'use client'

import { Button } from '@/components/tui/button'
import { ErrorMessage, Field, Label } from '@/components/tui/fieldset'
import { Input } from '@/components/tui/input'
import Link from 'next/link'
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { signInWithEmail, type State } from './actions'

function SubmitEmail() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Logging In...' : 'Log In'}
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
          <h1 className="text-2xl font-semibold tracking-tight">Welcome to Zetsy</h1>
        </div>
        <div>
          <SignUpEmail />
        </div>
        <p className="text-muted-foreground px-8 text-center text-sm">
          By clicking continue, you agree to our{' '}
          <Link href="/terms" className="hover:text-primary underline underline-offset-4">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="hover:text-primary underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
