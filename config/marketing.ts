// Benefits sections
import chat from '@/images/screenshots/chat_with_library.png'
import search from '@/images/screenshots/search.png'
import save from '@/images/screenshots/save.png'

// Testimonial Section
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

export const marketingConfig = {
  header: {
    links: [
      // { href: '/about', label: 'About' },
      { href: '/#features', label: 'Features' },
      // { href: '/#testimonials', label: 'Testimonials' },
      { href: '/#pricing', label: 'Pricing' },
      // { href: '/#faq', label: 'FAQ' },
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
        title: 'Intelligent Search',
        description:
          'Find what you need when you need it. Our advanced search functionality allows you to quickly locate any saved content, from the latest articles to your private notes.',
        image: search,
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
            'Zetsy is my private knowledge base with AI capabilities that arranges and organizes everything. It can ingest sources like websites, pdfs, podcasts, videos, and news. It organizes and summarizes everything in my library. Zetsy instantly becomes an expert in the information that matters most to me.',
          author: {
            name: 'Sheryl Berge',
            role: 'CEO at Lynch LLC',
            image: avatarImage1,
          },
        },
        {
          content:
            'Zetsy has revolutionized the way I manage my knowledge. Its AI capabilities have made it easier for me to organize and retrieve information from various sources like websites, PDFs, podcasts, and videos. It\'s like having a personal assistant that knows everything about my field.',
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
            'Zetsy has been a game-changer for my business. It not only helps me save valuable information but also summarizes it for quick understanding. It\'s like having an expert on my team who knows exactly what information matters most to me.',
          author: {
            name: 'Leland Kiehn',
            role: 'Founder of Kiehn and Sons',
            image: avatarImage5,
          },
        },
        {
          content:
            'Switching to Zetsy was one of the best decisions I\'ve made for my company. It has simplified our knowledge management process and made it more efficient. I can\'t imagine going back to our old system.',
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
            'Zetsy has made it so easy to manage and access my information. I no longer have to worry about losing important data or spending hours searching for it. Zetsy has truly transformed the way I work.',
          author: {
            name: 'Peter Renolds',
            role: 'Founder of West Inc',
            image: avatarImage3,
          },
        },
        {
          content:
            'I\'ve been using Zetsy for a while now and it has significantly improved my productivity. The AI capabilities are impressive and the system is very user-friendly. I highly recommend Zetsy to anyone looking to improve their knowledge management.',
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
          "question": "What types of sources can Zetsy ingest and organize information from?",
          "answer": "Zesty is designed to be a versatile information hub and can process content from a wide range of sources. This includes websites, PDFs, podcasts, videos, and news articles."
        },
        {
          "question": "Can Zetsy access information behind a paywall?",
          "answer": "Zesty cannot directly access paywalled content, but it can help you find alternative sources or summarize publicly available information on the topic."
        },
      ],
      [
        {
          "question": "Can I collaborate with others on my Zetsy knowledge base?",
          "answer": "Currently, Zetsy is designed for personal use. Collaboration features may be available in future updates."
        },
        {
          "question": "What devices can I access Zetsy on?",
          "answer": "Zetsy may offer access through web browsers and potentially mobile applications in the future. Specific details will depend on the developer's roadmap."
        },

      ],
      [
        {
          "question": "Does Zetsy offer a free trial?",
          "answer": "Yes, you can get started with Zetsy for free. You get all the capabilities of Zetsy including AI summaries and chat."
        },
        {
          "question": "Does Zesty have any limitations on the amount of information I can store?",
          "answer": "The storage capacity of Zetsy will depend on the specific plan you choose. Free plans have limitations on number of cocuments, while paid plans may offer more storage space."
        },
      ],
    ],
  },
  footer: {},
}
