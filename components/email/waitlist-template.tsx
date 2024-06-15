import * as React from 'react'
// import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

interface EmailTemplateProps {
  email: string
}

export const WaitlistTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email }) => (
  <>
    <div>
      <h3>Welcome, {email}!</h3>
      <br />
      <p>Thank you for signing up to our waitlist!</p>
      <br />
      <p>At Recall, we want to give every human a personal search engine. So, you can remember everything.</p>
      <p>We are working hard to get Zetsy into your hands - and will let you know as soon as it's ready.</p>
      <br />
      <p>We can't wait to welcome you!</p>
      <br />
      <p>Regards,</p>
      <p>Team Zetsy</p>
    </div>
    {/* <footer style={{ textAlign: 'center', marginTop: '20px', backgroundColor: 'lightgray' }}>
      <p>&copy; 2024 Neander</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/company/neander" target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon width={60} height={30} />
        </a>
        <a href="https://twitter.com/neanderAI" target="_blank" rel="noopener noreferrer">
          <TwitterLogoIcon width={60} height={30} />
        </a>
      </div>
    </footer> */}
  </>
)
