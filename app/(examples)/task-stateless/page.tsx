import { headers } from 'next/headers'

import { AddTaskForm } from './add-task-form'

export default function SafeActionPage() {
  const csrfToken = headers().get('X-CSRF-Token') || 'missing'
  return (
    <div>
      <h1>Safe Action Page</h1>
      <AddTaskForm csrfToken={csrfToken} />
    </div>
  )
}
