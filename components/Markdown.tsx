import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkBreaks from 'remark-breaks';
import remarkMath from 'remark-math';

export const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml, remarkBreaks, remarkMath]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};