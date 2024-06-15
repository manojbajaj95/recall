import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import remarkMath from 'remark-math'

export const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml, remarkBreaks, remarkMath]}>{markdown}</ReactMarkdown>
}
