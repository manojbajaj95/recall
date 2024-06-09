import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Coming Soon
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button className="mt-10">
        <Link href="/app" >
          Go back home
        </Link>
      </Button>
    </>
  )
}
