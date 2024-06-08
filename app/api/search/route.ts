// Takes the search query and returns docs

import { createClient } from '@/lib/supabase/server'
import { openai } from '@ai-sdk/openai'
import { embed } from 'ai'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { query, match_count, match_threshold, min_content_length } = await req.json()
  if (!query) {
    return NextResponse.error()
  }

  const supabaseClient = createClient(cookies())

  // Moderate the content to comply with OpenAI T&C
  const sanitizedQuery = query.trim()

  // Create embedding from query
  const { embedding } = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: sanitizedQuery.replaceAll('\n', ' '),
  })

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
    return NextResponse.error()
  }

  let contextText = []
  for (let i = 0; i < pageSections.length; i++) {
    const pageSection = pageSections[i]
    const content = pageSection.content
    contextText.push(content)
  }

  return NextResponse.json({ texts: contextText })
}
