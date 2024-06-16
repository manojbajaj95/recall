import { Logo } from '@/components/Logo'
import { Container } from '@/components/tui/container'
import { Heading } from '@/components/tui/heading'
import { cn } from '@/lib/utils'
import { allChanges, Change } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

function ChangeCard(change: Change) {
  return (
    <div className="mb-8">
      {change.version}
      <Heading>{change.title}</Heading>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 prose"
        dangerouslySetInnerHTML={{ __html: change.body.html }}
      />
    </div>
  )
}

export default function Changelog() {
  const changes = allChanges.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-12 space-y-6">
        <Logo className="w-24 h-24" />
        <h1 className="text-4xl font-bold text-center">Changelog</h1>
        <p className="text-lg text-center">Stay updated with the latest changes and improvements to our product.</p>
      </div>
      <ul role="list" className="space-y-6">
        {changes.map((change, index) => (
          <li key={change.slug} className="relative flex gap-x-4">
            <time dateTime={change.date} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
              {format(parseISO(change.date), 'LLLL d, yyyy')}
            </time>
            <div
              className={cn(
                index === allChanges.length - 1 ? 'h-6' : '-bottom-6',
                'absolute left-[90px] top-0 flex w-6 justify-center'
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>

            <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
            </div>

            <ChangeCard {...change} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
