import { Button } from '@/components/tui/button'
import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/tui/card'
import { Divider } from '@/components/tui/divider'
import { Heading } from '@/components/tui/heading'


export default async function Integrations() {
  return (
    <div className="h-full space-y-2">
      <div className="flex">
        <Heading className="grow">Integrations</Heading>
      </div>
      <Divider />
      <div className="mt-4 flex flex-wrap gap-2">
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Chrome Extension</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Chrome Extension to import all your bookmarks in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Google Drive</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Google Drive account to import all your documents in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Notion</CardTitle>
          </CardHeader>
          <CardContent>Connect to your notion account to import all your personal notes in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Twitter</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Twitter account to import all your tweets in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Telegram</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Telegram account to import all your messages in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Apple Books</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Apple Books account to import all your books in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Medium</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Medium account to import all your articles in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Goodreads</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Goodreads account to import all your books in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Pocket</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Pocket account to import all your articles in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Kindle</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Kindle account to import all your books in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Obsidian</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Obsidian account to import all your notes in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Readwise</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Readwise account to import all your highlights in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
        <Card className='max-w-96'>
          <CardHeader>
            <CardTitle>Instapaper</CardTitle>
          </CardHeader>
          <CardContent>Connect to your Instapaper account to import all your articles in Library. You can sync automatically</CardContent>
          <CardFooter><Button>Coming Soon</Button></CardFooter>
        </Card>
      </div>
    </div>
  )
}
