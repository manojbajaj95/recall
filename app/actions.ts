// @ts-nocheck
'use server'

import { embed } from 'ai'
import { openai } from '@ai-sdk/openai'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { redirect } from 'next/navigation'

export type State = {
  status: 'success' | 'error'
  message: string | string[]
} | null

export const createEmbed = async (prevState: State, formData: FormData): Promise<State> => {
  // console.log("Request received")
  const supabaseClient = createClient(cookies())
  const { data: UserData } = await supabaseClient.auth.getUser()
  const { user } = UserData
  if (!user) {
    return redirect('/auth/login')
  }

  const url = formData.get('url') as string
  if (!url) {
    return {
      status: 'error',
      message: 'Please provide a URL',
    }
  }

  // read url
  const text = await extractMd(url)
  // console.log(text)

  const bucketName = `${user.id}`

  // Check if bucket exits
  const { data: bucket, error: bucketError } = await supabaseClient.storage.getBucket(bucketName)

  if (bucketError && bucketError.message === 'Bucket not found') {
    // Create new bucket
    const { error: createBucketError } = await supabaseClient.storage.createBucket(bucketName, {
      public: false,
    })

    if (createBucketError) {
      console.error('Error creating bucket:', createBucketError)
      return {
        status: 'error',
        message: 'Error creating bucket',
      }
    }
  } else if (bucketError) {
    console.error('Error getting bucket:', bucketError)
    return {
      status: 'error',
      message: 'Error creating bucket',
    }
  }

  const slug = url.split('/').pop()?.split('.').shift()

  const { error: storageError } = await supabaseClient.storage
    .from(bucketName)
    .upload(`${slug}.md`, text, {
      contentType: 'text/markdown',
    })
  const path = `/${bucketName}/${slug}.md`

  if (storageError) {
    console.error('Error uploading markdown to Supabase Storage:', storageError)
    return {
      status: 'error',
      message: 'Error uploading markdown',
    }
  }

  // Save the source to sources table
  const { data: source, error: insertError } = await supabaseClient
    .from('sources')
    .insert({ path, type: 'website', source: url })
    .select('id')
  if (insertError) {
    console.error('Error uploading markdown to Supabase Storage:', insertError)
    return {
      status: 'error',
      message: 'Error making Db entry',
    }
  }

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 8192,
    chunkOverlap: 512,
  })

  const output = await splitter.createDocuments([text])

  output.forEach(async (document) => {
    const { embedding } = await embed({
      model: openai.embedding('text-embedding-3-small'),
      value: document.pageContent,
    })
    // Add embedding here
    // @ts-ignore
    const { error: insertEmbeddingError } = await supabaseClient.from('sections').insert({
      content: document.pageContent,
      embedding: embedding,
      source_id: source[0].id,
    })

    if (insertEmbeddingError) {
      console.error('Error saving embedding to Supabase:', insertEmbeddingError)
      return {
        status: 'error',
        message: 'Error saving embedding',
      }
    }
  })

  return {
    status: 'success',
    message: 'Added Successfully',
  }
}

async function extractMd(url: string) {
  const response = await fetch(`https://md.dhr.wtf/?url=${url}&detailedResponse=true`, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
  const text = await response.text()
  return text
}

export const getRelevantContent = async (prevState: State, formData: FormData): Promise<State> => {
  const query = formData.get('query') as string
  const match_count = null // formData.get("match_count") as number
  const match_threshold = null
  const min_content_length = null
  if (!query) {
    return {
      status: 'error',
      message: 'Query is required',
    }
  }

  const supabaseClient = createClient(cookies())

  // Moderate the content to comply with OpenAI T&C
  const sanitizedQuery = query.trim()

  // Create embedding from query
  const { embedding } = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: sanitizedQuery.replaceAll('\n', ' '),
  })

  // @ts-ignore
  const { error: matchError, data: pageSections } = await supabaseClient.rpc(
    'match_page_sections',
    {
      embedding,
      match_count: match_count || 10,
      match_threshold: match_threshold || 0.5,
      min_content_length: min_content_length || 50,
    }
  )

  if (matchError) {
    console.error('Error fetching sections:', matchError)
    return {
      status: 'error',
      message: 'Server Error',
    }
  }

  let contextText = []
  for (let i = 0; i < pageSections.length; i++) {
    const pageSection = pageSections[i]
    const content = pageSection.content
    contextText.push(content)
  }
  console.log(contextText)
  return {
    status: 'success',
    message: contextText,
  }
}
