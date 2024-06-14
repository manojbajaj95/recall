'use client'

import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/tui/Container'
import screenshotContacts from '@/images/screenshots/focused-reading.png'
import screenshotInventory from '@/images/screenshots/landing_notes.png'
import screenshotProfitLoss from '@/images/screenshots/landing_save_anything.png'
import React from 'react'

interface Feature {
  name: string
  summary: string
  description: string
  image: ImageProps['src']
  // icon: React.ComponentType
}

const features: Array<Feature> = [
  {
    name: 'Stay Organized',
    summary: 'Keep all your important content in one place.',
    description:
      'Keep all your important content in one place, neatly organized and easily searchable. Zetsy ensures that you never lose track of valuable information.',
    image: screenshotProfitLoss,

  },
  {
    name: 'Boost Productivity',
    summary: 'Spend less time searching and more time doing.',
    description:
      'Spend less time searching and more time doing. With Zetsy’s efficient saving and retrieval system, you can focus on what matters most.',
    image: screenshotInventory,

  },
  {
    name: 'Enhanced Privacy',
    summary: 'Your data, your rules.',
    description:
      'Your data, your rules. Zetsy prioritizes your privacy, ensuring that all your information is stored securely and accessed only by you.',
    image: screenshotContacts,

  },
  {
    name: 'Effortless Access',
    summary: 'Access your saved content anytime, anywhere.',
    description:
      'Access your saved content anytime, anywhere. With Zetsy, your digital memory is always at your fingertips, whether you\'re on your desktop or mobile device.',
    image: screenshotContacts,

  },
  {
    name: 'Maximize Insights',
    summary: 'Turn your saved data into actionable insights.',
    description:
      'Turn your saved data into actionable insights. By chatting with your data and using it with various agents, you can extract meaningful information and make informed decisions.',
    image: screenshotContacts,

  },
  {
    name: 'Integration with Agents',
    summary: 'Enhance productivity and insights with agent integration.',
    description:
      'Leverage your saved data with various agents for enhanced productivity and insights. Zetsy seamlessly integrates with tools and agents, enhancing your workflow and decision-making process.',
    image: screenshotContacts,
  },
]


const title = "Simplify everyday business tasks.";
const description = "Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.";


function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      {/* <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div> */}
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            {/* <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          {/* <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels> */}
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">


          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {description}
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
