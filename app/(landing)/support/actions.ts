'use server'

import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export const addSupportQuery = async (prevState: any, formData: FormData) => {
  const client = createClient(cookies())
  const firstName = formData.get('first_name')
  const lastName = formData.get('last_name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')
  const { data, error } = await client.from('support').insert({
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    message: message,
  })
  return {
    status: 'success',
    message: 'Thanks for reaching out. We will take a look at the earliest.',
  }
}
