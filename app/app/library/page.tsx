import { Button } from "@/components/tui/button"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { LinkIcon } from "@heroicons/react/20/solid"
import { CreateCollection, MoveCollection, DeleteSource } from "./collection"


const RenderCollection = ({ collection_name, sources, collections }: any) => {
  return (
    <>
      <p>{collection_name}</p>
      {sources.map((source, index) => (
        <div key={index} className="border rounded p-2 flex justify-between">
          <div>
            <p>Url: {source.source}</p>
            <p>Type: {source.type}</p>

          </div>
          <div className="space-x-2">
            <Button href={source.source} target="_blank" outline>
              View Source
              <LinkIcon />
            </Button>
            <MoveCollection source={source.id} collections={collections} />
            <DeleteSource source={source.id} />
          </div>
        </div>
      ))}
    </>
  )

}

export default async function Library() {

  const getCollections = async () => {
    const client = createClient(cookies())
    const { data, error } = await client.from("collections").select(`id, collection_name`)
    if (error) {
      console.error(error)
      return []
    }
    return data
  }

  const getSources = async () => {
    let acc: Record<string, []> = {}
    const client = createClient(cookies())
    const { data, error } = await client.from("sources").select(`id, type, source , collection(id, collection_name)`)
    if (error) {
      console.error(error)
      return acc
    }
    data.forEach((source) => {
      const collectionName: string = source.collection?.collection_name || 'Uncategorized';
      if (!acc[collectionName]) {
        acc[collectionName] = [];
      }
      acc[collectionName].push(source);
    })
    return acc
  }


  const sources = await getSources()
  const collections = await getCollections()


  return (
    <>
      <main className="h-full">
        <div className="flex">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 grow"> Your Library </h2>
          <CreateCollection />
        </div>
        <div className="space-y-2">
          {Object.keys(sources).map((key, index) => (
            <RenderCollection collection_name={key} sources={sources[key]} key={index} collections={collections} />
          ))}

        </div>
      </main>
    </>
  )
}

