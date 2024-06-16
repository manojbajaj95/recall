import { BlogCard } from '@/components/BlogCard'
import { Divider } from '@/components/tui/divider'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/tui/pagination'
import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { notFound } from 'next/navigation'

export default function Home() {
  const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  if (blogs) {
    return (
      <section className="bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-4">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                Learn what we are cooking at Zetsy
              </p>
            </div>
          </div>
          <Divider />
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {blogs.map((blog, idx) => (
              <BlogCard key={idx} {...blog} />
            ))}
          </div>
          <Divider />
          <Pagination>
            <PaginationPrevious href="?page=1" />
            <PaginationList>
              <PaginationPage href="?page=1" current>
                1
              </PaginationPage>
            </PaginationList>
            <PaginationNext href="?page=1" />
          </Pagination>
        </div>
      </section>
    )
  } else return notFound()
}
