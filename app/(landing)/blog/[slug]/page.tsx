import { allBlogs } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'


const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find((post) => post.slug === params.slug)
  if (!post) return notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <MDXContent />
    </article>
  )
}

export default PostLayout
