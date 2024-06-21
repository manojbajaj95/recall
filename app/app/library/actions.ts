'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export type State = {
  status: 'success' | 'error'
  message: string
} | null

export const createCollection = async (prevState: State, formData: FormData): Promise<State> => {
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const client = createClient(cookies())
  const { data, error } = await client
    .from('collections')
    .insert([{ name: name, details: description }])
    .select('id')
  if (error) {
    console.error('Error inserting collection: ', error)
    return { status: 'error', message: 'Error' }
  }
  revalidatePath('/app/librarry')
  return { status: 'success', message: `${data[0].id}` }
}

export const editCollection = async (id: number, prevState: State, formData: FormData): Promise<State> => {
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const client = createClient(cookies())
  const { data, error } = await client
    .from('collections')
    .update({ name: name, details: description })
    .eq('id', id)
    .select()
  if (error) {
    console.error('Error updating collection: ', error)
    return { status: 'error', message: 'Error' }
  }
  revalidatePath('/app/librarry')
  return { status: 'success', message: `${data[0].id}` }
}

export const moveToCollection = async (source: number, prevState: State, formData: FormData): Promise<State> => {
  const collection = formData.get('collection') as number
  const client = createClient(cookies())
  const { data: updateData, error: updateError } = await client
    .from('sources')
    .update({ collection: collection })
    .eq('id', source)
    .select('*')
  if (updateError) {
    console.error('Error updating source collection: ', updateError)
    return { status: 'error', message: 'Error' }
  }
  revalidatePath('/app/librarry')
  return { status: 'success', message: 'Success' }
}

export const deleteSource = async (source: number, prevState: State, formData: FormData): Promise<State> => {
  console.log('Deleting', source)
  const client = createClient(cookies())
  const { data: sectionsData, error: sectionsError } = await client.from('sections').delete().eq('source_id', source)
  if (sectionsError) {
    console.error('Error deleting sections: ', sectionsError)
    return { status: 'error', message: 'Error' }
  }
  const { data: deleteData, error: deleteError } = await client
    .from('sources')
    .delete()
    .eq('id', source)
    .select('id, path')
  console.log(deleteData, 'delete')
  if (deleteError) {
    console.error('Error deleting source: ', deleteError)
    return { status: 'error', message: 'Error' }
  }
  revalidatePath('/app/librarry')
  return { status: 'success', message: 'Success' }
}
