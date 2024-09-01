'use client'

import { useStateAction } from 'next-safe-action/stateful-hooks'

import { addTaskStatefulFormAction } from './add-task-stateful-action'

type AddTaskFormProps = {
  csrfToken: string
}

const AddTaskForm = ({ csrfToken }: AddTaskFormProps) => {
  const { execute, result, input } = useStateAction(addTaskStatefulFormAction, {
    initResult: { data: { newName: '' } },
    onSuccess({ data, input }) {
      console.log('HELLO FROM ONSUCCESS', data, input)
    },
  })
  console.log('INPUT ->', Object.fromEntries(input?.entries() ?? []))
  console.log('RESULT ->', result)
  return (
    <>
      <form className="mb-6" action={execute}>
        <input type="hidden" name="csrf_token" value={csrfToken} />
        <input
          type="text"
          name="name"
          className="border rounded px-3 py-2 mr-2 text-black"
          placeholder="Enter task title"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
      {JSON.stringify(result)}
    </>
  )
}

export { AddTaskForm }
