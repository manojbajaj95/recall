import { Button } from "@/components/tui/button"
import { Database } from "@/lib/database.types"
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"


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
        <div className="">
          {sources.map((source, index) => (
            <div key={index} className="border rounded">
              <p>Type: {source.type}</p>
              <p>{source.source}</p>
              <Button href={source.source} target="_blank">View Source</Button>
              <Button href="/app/chat">Chat</Button>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

