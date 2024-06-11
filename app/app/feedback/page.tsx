'use client'
import { Button } from '@/components/tui/button';
import { usePostHog } from 'posthog-js/react';
import { useState } from 'react';

export default function Feedback() {
  const [submitted, setSubmit] = useState(false)
  const posthog = usePostHog();

  const handleFeedbackSubmit = (e: any) => {
    e.preventDefault();
    const feedback = e.target.elements.feedback.value;
    posthog.capture("survey sent", {
      $survey_id: '01900913-d325-0000-493b-cee6245cd46b',
      $survey_response: feedback
    })
    setSubmit(true)
  }

  return (
    <div>
      {submitted ? <p>Thank you for feedback</p> :
        (
          <>
            <h1>Give us feedback</h1>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                id="feedbackInput"
                name="feedback"
                placeholder="Give us feedback on our product!"
                required
              ></textarea>
              <Button type="submit" >Submit Feedback</Button>
            </form>
          </>
        )
      }

    </div>
  );
}