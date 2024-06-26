import { marketingConfig } from '@/config/marketing'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Heading } from '@/components/tui/heading'
import Image from "next/image"



export const Problem = () => {
  return (
    <section id="about" className="bg-slate-300 px-6 py-16 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{marketingConfig.problem.title}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{marketingConfig.problem.subtitle}</p>
      </div>
      {/* <h2>See how you can leverage Zetsy in your workflow</h2> */}
      <div className='w-full max-w-6xl my-10 mx-auto p-2'>
        <TabGroup className="mx-auto p-2">
          <TabList className="p-2 flex justify-center gap-32 my-4">
            {marketingConfig.problem.uses.map((use, index) => (
              <Tab key={index} className="p-2 rounded-lg data-[selected]:bg-blue-300/70">
                <Heading>{use.user}</Heading>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {marketingConfig.problem.uses.map((use, index) => (
              <TabPanel key={index} className="flex gap-8">
                <Image src={use.image} width={512} height={512} alt={use.user} className='h-[32rem] w-[48rem]' />
                <div className='flex flex-col justify-center gap-8'>
                  {use.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className='p-2'>
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-base text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>

    </section>
  )
}
