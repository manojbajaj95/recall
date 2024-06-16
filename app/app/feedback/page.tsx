'use client'
import { Button } from '@/components/tui/button'
import { Divider } from '@/components/tui/divider'
import { Heading } from '@/components/tui/heading'
import { Textarea } from '@/components/tui/textarea'
import { usePostHog } from 'posthog-js/react'
import { useState } from 'react'

export default function Feedback() {
  const [submitted, setSubmit] = useState(false)
  const posthog = usePostHog()

  const handleFeedbackSubmit = (e: any) => {
    e.preventDefault()
    const feedback = e.target.elements.feedback.value
    posthog.capture('survey sent', {
      $survey_id: '01900913-d325-0000-493b-cee6245cd46b',
      $survey_response: feedback,
    })
    setSubmit(true)
  }

  return (
    <div className="h-full space-y-4">
      <Heading>Let us know what you think</Heading>
      <Divider />
      <div>
        {submitted ? (
          <p>Thank you for feedback</p>
        ) : (
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col my-4 space-y-4">
            <Textarea
              id="feedbackInput"
              name="feedback"
              placeholder="Give us feedback on our product!"
              required
              className="h-60"
            ></Textarea>
            <Button type="submit">Submit Feedback</Button>
          </form>
        )}
      </div>
    </div>
  )
}
