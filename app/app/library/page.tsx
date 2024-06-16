import { Button } from '@/components/tui/button'
import { Divider } from '@/components/tui/divider'
import { Heading } from '@/components/tui/heading'
import { Database } from '@/lib/database.types'
import { createClient } from '@/lib/supabase/server'
import { ArrowUpRightIcon, ShareIcon } from '@heroicons/react/20/solid'
import { cookies } from 'next/headers'
import { cache } from 'react'
import { CreateCollection, DeleteSource, MoveCollection } from './collection'

type Collection = Database['public']['Tables']['collections']['Row']
type Source = Database['public']['Tables']['sources']['Row']

const RenderCollection = ({ collection, collections }: { collection: Collection; collections: Collection[] }) => {
  const collection_name = collection.collection_name.charAt(0).toUpperCase() + collection.collection_name.slice(1)
  return (
    <div>
      <div className="flex space-x-2">
        <Heading className="grow">
          {collection_name}: {collection.collection_details}
        </Heading>
        <CreateCollection collection={collection} />
        <Button>
          {' '}
          Share <ShareIcon />
        </Button>
      </div>
      <div className="">
        {collection?.sources.map((source, index) => (
          <div key={index} className="flex justify-between rounded border p-2 my-2">
            <div>
              <p>Url: {source.source}</p>
              <p>Type: {source.type}</p>
            </div>
            <div className="space-x-2">
              <Button href={source.source} target="_blank" outline>
                View
                <ArrowUpRightIcon />
              </Button>
              {/* <Button outline>Edit</Button> */}
              <MoveCollection source={source.id} collections={collections} />
              <DeleteSource source={source.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Library() {
  const getCollections = cache(async () => {
    const client = createClient(cookies())
    const { data, error } = await client
      .from('collections')
      .select('id, collection_name, collection_details, sources(id, type, source)')
    if (error) {
      console.error(error)
      return []
    }
    return data
  })

  const collections = await getCollections()

  return (
    <div className="h-full space-y-2">
      <div className="flex">
        <Heading className="grow"> Your Library </Heading>
        <CreateCollection />
      </div>
      <Divider />
      <div className="space-y-2 mt-4">
        {collections.map((collection, index) => (
          <RenderCollection collection={collection} key={index} collections={collections} />
        ))}
      </div>
    </div>
  )
}
