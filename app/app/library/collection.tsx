"use client"

import { Button } from '@/components/tui/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/tui/dialog'
import { Description, Field, Label } from "@/components/tui/fieldset"
import { Input } from '@/components/tui/input'
import { useState } from "react"
import { createCollection, deleteSource, moveToCollection } from './actions'
import { useFormState as useActionState, useFormStatus } from 'react-dom'
import { Select } from '@/components/tui/select'
import { TrashIcon } from '@heroicons/react/20/solid'

export const CreateCollection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, formAction] = useActionState(createCollection, null)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Create Collection</Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Create Collection</DialogTitle>
        <DialogDescription>
          Create a collection to organize your data
        </DialogDescription>
        <form action={formAction}>
          <DialogBody>
            <Field>
              <Label>Name</Label>
              <Description>Give a name to your collection</Description>
              <Input name="name" placeholder="default" />
            </Field>
            <Field>
              <Label>Description</Label>
              <Description>Small description about your collection</Description>
              <Input name="description" placeholder="default" />
            </Field>

          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type='submit'>Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export const MoveCollection = ({ source, collections }: { source: number, collections: { id: number, collection_name: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, formAction] = useActionState(moveToCollection.bind(null, source), null)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Move to Collection</Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Move to a Collection</DialogTitle>
        <DialogDescription>
          Organize your sources by moving them to collection
        </DialogDescription>
        <form action={formAction}>
          <DialogBody>
            <Field>
              <Label>Select Collection</Label>
              <Description>Give a name to your collection</Description>
              <Select name="collection">
                {collections.map((collection) => (
                  <option value={collection.id} key={collection.id}>{collection.collection_name}</option>
                ))}
              </Select>
            </Field>
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type='submit'>Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export const DeleteSource = ({ source }: { source: number }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, formAction] = useActionState(deleteSource.bind(null, source), null)
  return (
    <>
      <Button outline onClick={() => setIsOpen(true)}>Delete <TrashIcon /></Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Delete Source</DialogTitle>
        <DialogDescription>
          Delete a source from your library
        </DialogDescription>
        <DialogActions>
          <form action={formAction}>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type='submit'>Submit</Button>
          </form>
        </DialogActions>
      </Dialog>
    </>
  )
}