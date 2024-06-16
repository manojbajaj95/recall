'use client'

import { Container } from '@/components/tui/container'

import { marketingConfig } from '@/config/marketing'
import React from 'react'

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: any
  isActive: boolean
}) {
  return (
    <div {...props}>
      {feature.icon && (
        <div className="w-9 rounded-lg bg-slate-500">
          <svg aria-hidden="true" className="h-9 w-9" fill="none">
            <feature.icon />
          </svg>
        </div>
      )}
      <h3 className="mt-6 text-sm font-medium text-slate-600">{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-slate-900">{feature.summary}</p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {marketingConfig.features.features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8">
        {marketingConfig.features.features.map((feature, featureIndex) => (
          <Feature key={feature.summary} feature={feature} isActive={false} className="relative" />
        ))}
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {marketingConfig.features.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">{marketingConfig.features.subtitle}</p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
