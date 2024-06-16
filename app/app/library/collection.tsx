'use client'

import { Button } from '@/components/tui/button'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from '@/components/tui/dialog'
import { Description, Field, Label } from '@/components/tui/fieldset'
import { Input } from '@/components/tui/input'
import { Select } from '@/components/tui/select'
import { TrashIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { useFormState as useActionState } from 'react-dom'
import { createCollection, deleteSource, editCollection, moveToCollection } from './actions'

export const CreateCollection = ({ collection }: { collection?: any }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, formAction] = collection
    ? useActionState(editCollection.bind(null, collection.id), null)
    : useActionState(createCollection, null)
  return (
    <>
      {collection ? (
        <Button onClick={() => setIsOpen(true)} outline>
          Edit
        </Button>
      ) : (
        <Button onClick={() => setIsOpen(true)}>Create Collection</Button>
      )}
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>{collection ? 'Edit Collection' : 'Create Collection'}</DialogTitle>
        <DialogDescription>Create a collection to organize your data</DialogDescription>
        <form action={formAction}>
          <DialogBody>
            <Field>
              <Label>Name</Label>
              <Description>Give a sutiable name to your collection</Description>
              <Input name="name" placeholder="default" defaultValue={collection?.collection_name} />
            </Field>
            <Field>
              <Label>Description</Label>
              <Description>Small description about your collection</Description>
              <Input name="description" placeholder="default" defaultValue={collection?.collection_details} />
            </Field>
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">{collection ? 'Update' : 'Create'}</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export const MoveCollection = ({
  source,
  collections,
}: {
  source: number
  collections: { id: number; collection_name: string }[]
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, formAction] = useActionState(moveToCollection.bind(null, source), null)
  return (
    <>
      <Button outline onClick={() => setIsOpen(true)}>
        Move
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Move to a Collection</DialogTitle>
        <DialogDescription>Organize your sources by moving them to collection</DialogDescription>
        <form action={formAction}>
          <DialogBody>
            <Field>
              <Label>Select Collection</Label>
              <Description>Give a name to your collection</Description>
              <Select name="collection">
                {collections.map((collection) => (
                  <option value={collection.id} key={collection.id}>
                    {collection.collection_name}
                  </option>
                ))}
              </Select>
            </Field>
          </DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
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
      <Button outline onClick={() => setIsOpen(true)}>
        Delete <TrashIcon />
      </Button>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Delete Source</DialogTitle>
        <DialogDescription>Delete a source from your library</DialogDescription>
        <DialogActions>
          <form action={formAction}>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </form>
        </DialogActions>
      </Dialog>
    </>
  )
}
