'use client'

import { createEmbed } from '@/app/actions'
import { Button } from '@/components/tui/button'
import { Divider } from '@/components/tui/divider'
import { Description, Field, Fieldset, Label } from '@/components/tui/fieldset'
import { Heading } from '@/components/tui/heading'
import { Input } from '@/components/tui/input'
import { useState } from 'react'
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { Radio, RadioField, RadioGroup } from '@/components/tui/radio'

export default function Home() {
  const [state, formAction] = useActionState(createEmbed, null)
  const { pending } = useFormStatus()

  const [url, setUrl] = useState("")
  const [type, setType] = useState("")

  const getType = (url: string) => {
    if (!url) {
      return ""
    }
    let urlObject;
    try {
      urlObject = new URL(url);
    } catch (error) {
      console.error("Invalid URL: ", error);
      return ""
    }
    const hostname = urlObject.hostname;

    if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
      return 'twitter';
    } else if (hostname.includes('youtube.com')) {
      return 'youtube';
    }
    return "blog"
  }

  const handleChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const fileName = i.name;
      const fileExtension = fileName.split('.').pop();
      setType(fileExtension);
    }
  };

  return (
    <>
      <div className="h-full space-y-2">
        <Heading>Upload Sources</Heading>
        <Divider />
        <form action={formAction}>
          <div className="flex flex-col space-y-2">
            <Field>
              <Label>Enter a URL you want to save</Label>
              <Description>Currently only websites are supported.</Description>
              <Input id="url" name="url" placeholder="https://example.com" onChange={(e) => { setUrl(e.target.value); setType(getType(e.target.value)) }} value={url} />
            </Field>
            <Divider />
            <Field>
              <label
                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop files to Attach, or {" "}
                    <span className="text-blue-600 underline">browse</span>
                  </span>
                </span>
                <input type="file" name="file" id="file" accept="application/pdf" className="hidden" onChange={handleChange} />
              </label>
            </Field>
            {type && <Fieldset>
              <Label>Input Type</Label>
              <RadioGroup name="type" id="type" value={type}>
                <div className='flex gap-4'>
                  <RadioField>
                    <Radio value='twitter' />
                    <Label>Twitter</Label>
                  </RadioField>
                  <RadioField>
                    <Radio value='youtube' />
                    <Label>YouTube</Label>
                  </RadioField>
                  <RadioField>
                    <Radio value='blog' />
                    <Label>Blog</Label>
                  </RadioField>
                  <RadioField>
                    <Radio value='pdf' />
                    <Label>PDF</Label>
                  </RadioField>
                  <RadioField>
                    <Radio value='docx' />
                    <Label>DOCX</Label>
                  </RadioField>
                </div>
              </RadioGroup>
            </Fieldset>}
            {state?.message}
            <Button type="submit" disabled={pending}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
