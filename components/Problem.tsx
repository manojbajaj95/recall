import { marketingConfig } from '@/config/marketing'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export const Problem = () => {
  return (
    <section id="about" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{marketingConfig.problem.title}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{marketingConfig.problem.subtitle}</p>
      </div>
      <TabGroup>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  )
}
