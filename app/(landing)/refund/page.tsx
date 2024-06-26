const refund = () => {
  const name = 'Zetsy'
  const website = 'https://zetsy.dev'
  return (
    <div className="container prose mx-auto">
      <h1>Refund Policy</h1>
      <p>At {name}, we strive to ensure our customers are satisfied with our services. This refund policy outlines the terms and conditions for refunds on our software subscriptions.</p>

      <h2>Eligibility for Refunds</h2>
      <p>We offer a 30-day money-back guarantee on all new subscriptions. If you are not satisfied with our service within the first 30 days of your subscription, you may request a full refund.</p>

      <h2>Refund Process</h2>
      <ol>
        <li>To request a refund, please contact our support team at support@zetsy.dev within the 30-day period.</li>
        <li>Please provide your account details and the reason for your refund request.</li>
        <li>Our team will review your request and process the refund within 5-10 business days.</li>
      </ol>

      <h2>Exceptions</h2>
      <ul>
        <li>Refunds are not available for subscription renewals after the initial 30-day period.</li>
        <li>Pro-rated refunds are not offered for partial use of services.</li>
        <li>Refunds may be denied in cases of suspected fraud or abuse of the refund policy.</li>
      </ul>

      <h2>Cancellation Policy</h2>
      <p>You may cancel your subscription at any time. Cancellations will take effect at the end of your current billing cycle. No refunds will be provided for unused portions of your subscription period.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our refund policy, please contact us at support@zetsy.dev</p>
    </div>)
}

export default refund