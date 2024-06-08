'use server'

import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createAbsoluteUrl } from '@/lib/utils'
import { z } from 'zod'

export type State = {
  status: 'success' | 'error'
  message: string
} | null

export const signInWithMobile = async (prevState: State, formData: FormData) => {
  const supabase = createClient(cookies())
  const phone = formData.get('phone') as string
  const phoneSchema = z.string().refine(
    (phone) => {
      const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
      return phoneRegex.test(phone)
    },
    { message: 'Invalid phone number. Please include country code.' }
  )

  try {
    phoneSchema.parse(phone)
  } catch (error) {
    return { status: 'error', message: 'Please enter a valid phone number with country code' }
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    phone: phone,
  })
  if (error) {
    console.log(error)
  }
  redirect(`/auth/verify?phone=${phone}`)
}

export const signInWithEmail = async (state: State, formData: FormData) => {
  'use server'
  const supabase = createClient(cookies())
  let email = formData.get('email') as string

  const emailSchema = z.string().email({ message: 'Invalid email address' })

  try {
    emailSchema.parse(email)
  } catch (error) {
    return { status: 'error', message: 'please enter valid email' }
  }

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: createAbsoluteUrl('/auth/callback'),
    },
  })
  if (error) {
    console.log(error)
    return {
      status: 'error',
      message: 'System error',
    }
  }
  return {
    status: 'success',
    message: 'Check your inbox',
  }
}
