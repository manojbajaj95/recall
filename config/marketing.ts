// Benefits sections
import chat from '@/images/screenshots/landing_notes.png'
import reading from '@/images/screenshots/reading-nook.png'
import remember from '@/images/screenshots/remember.png'
import save from '@/images/screenshots/save_anything.png'

// Testimonial Section
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

export const marketingConfig = {
  header: {
    links: [
      { href: '/about', label: 'About' },
      { href: '/#features', label: 'Features' },
      { href: '/#testimonials', label: 'Testimonials' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/#faq', label: 'FAQ' },
    ],
  },
  hero: {
    subtitle:
      'Never lose track of valuable information again. Effortlessly save and retrieve your online discoveries, personal notes, and documents, all in one secure place.',
  },
  problem: {
    title: 'Today Everyone is a knowledge worker',
    subtitle: 'Zetsy allows you to organize your knowledge sources in one central place.',
  },
  benefits: {
    title: 'Powerful and Private Memory',
    description: '',
    benefits: [
      {
        title: 'Seamless Saving',
        description:
          'Easily save links to your favorite blogs, tweets, YouTube videos, and more. With Zetsy, all your online discoveries are just a click away.',
        image: save,
      },
      {
        title: 'Personal Notes & Documents',
        description:
          'Store your personal notes and private documents securely. Whether it’s a brainstorming session or important paperwork, Zetsy keeps everything safe and accessible.',
        image: reading,
      },
      {
        title: 'Intelligent Search',
        description:
          'Find what you need when you need it. Our advanced search functionality allows you to quickly locate any saved content, from the latest articles to your private notes.',
        image: remember,
      },
      {
        title: 'Chat with Your Data',
        description:
          'Engage in meaningful conversations with your stored information. Whether you need a summary or specific details, Zetsy’s chat feature makes interacting with your data simple and intuitive.',
        image: chat,
      },
    ],
  },
  testimonials: {
    title: 'Loved by businesses worldwide.',
    subtitle:
      'Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission- critical features.',
    testimonials: [
      [
        {
          content:
            'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
          author: {
            name: 'Sheryl Berge',
            role: 'CEO at Lynch LLC',
            image: avatarImage1,
          },
        },
        {
          content:
            'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
          author: {
            name: 'Amy Hahn',
            role: 'Director at Velocity Industries',
            image: avatarImage4,
          },
        },
      ],
      [
        {
          content:
            'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
          author: {
            name: 'Leland Kiehn',
            role: 'Founder of Kiehn and Sons',
            image: avatarImage5,
          },
        },
        {
          content:
            'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
          author: {
            name: 'Erin Powlowski',
            role: 'COO at Armstrong Inc',
            image: avatarImage2,
          },
        },
      ],
      [
        {
          content:
            'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
          author: {
            name: 'Peter Renolds',
            role: 'Founder of West Inc',
            image: avatarImage3,
          },
        },
        {
          content:
            'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
          author: {
            name: 'Amy Hahn',
            role: 'Director at Velocity Industries',
            image: avatarImage4,
          },
        },
      ],
    ],
  },
  features: {
    title: 'Simplify everyday business tasks.',
    subtitle:
      'Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.',
    features: [
      {
        name: 'Stay Organized',
        summary: 'Keep all your important content in one place.',
        description:
          'Keep all your important content in one place, neatly organized and easily searchable. Zetsy ensures that you never lose track of valuable information.',
      },
      {
        name: 'Boost Productivity',
        summary: 'Spend less time searching and more time doing.',
        description:
          'Spend less time searching and more time doing. With Zetsy’s efficient saving and retrieval system, you can focus on what matters most.',
      },
      {
        name: 'Enhanced Privacy',
        summary: 'Your data, your rules.',
        description:
          'Your data, your rules. Zetsy prioritizes your privacy, ensuring that all your information is stored securely and accessed only by you.',
      },
      {
        name: 'Effortless Access',
        summary: 'Access your saved content anytime, anywhere.',
        description:
          "Access your saved content anytime, anywhere. With Zetsy, your digital memory is always at your fingertips, whether you're on your desktop or mobile device.",
      },
      {
        name: 'Maximize Insights',
        summary: 'Turn your saved data into actionable insights.',
        description:
          'Turn your saved data into actionable insights. By chatting with your data and using it with various agents, you can extract meaningful information and make informed decisions.',
      },
      {
        name: 'Integration with Agents',
        summary: 'Enhance productivity and insights with agent integration.',
        description:
          'Leverage your saved data with various agents for enhanced productivity and insights. Zetsy seamlessly integrates with tools and agents, enhancing your workflow and decision-making process.',
      },
    ],
  },
  faq: {
    faqs: [
      [
        {
          question: 'Does TaxPal handle VAT?',
          answer: 'Well no, but if you move your company offshore you can probably ignore it.',
        },
        {
          question: 'Can I pay for my subscription via purchase order?',
          answer: 'Absolutely, we are happy to take your money in all forms.',
        },
        {
          question: 'How do I apply for a job at TaxPal?',
          answer: 'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
        },
      ],
      [
        {
          question: 'What was that testimonial about tax fraud all about?',
          answer: 'TaxPal is just a software application, ultimately your books are your responsibility.',
        },
        {
          question: 'TaxPal sounds horrible but why do I still feel compelled to purchase?',
          answer:
            'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
        },
        {
          question: 'I found other companies called TaxPal, are you sure you can use this name?',
          answer:
            'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
        },
      ],
      [
        {
          question: 'How do you generate reports?',
          answer:
            'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
        },
        {
          question: 'Can we expect more inventory features?',
          answer: 'In life it’s really better to never expect anything at all.',
        },
        {
          question: 'I lost my password, how do I get into my account?',
          answer:
            'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
        },
      ],
    ],
  },
  footer: {},
}
