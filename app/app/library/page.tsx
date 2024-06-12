import { Button } from "@/components/tui/button"
import { Database } from "@/lib/database.types"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { LinkIcon, TrashIcon } from "@heroicons/react/20/solid"


type Source = Database["public"]["Tables"]["sources"]["Row"]

export default async function Library() {


  const getSources = async () => {
    const client = createClient(cookies())
    const { data, error } = await client.from("sources").select("*")
    if (error) {
      return []
    }
    return data
  }

  const sources: Source[] = await getSources()

  return (
    <>
      <main className="h-full">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"> Your Library </h2>
        <div className="space-y-2">
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
                <Button outline >
                  Delete
                  <TrashIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

