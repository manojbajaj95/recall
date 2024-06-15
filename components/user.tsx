'use client'
import { createClient } from '@/lib/supabase/client'

export const UserDetails = async () => {
  const client = createClient()
  const {
    data: { user },
  } = await client.auth.getUser()
  if (user) {
    return <p>Welcome User: {user.email}</p>
  } else return <p>Not Logged In</p>
}
