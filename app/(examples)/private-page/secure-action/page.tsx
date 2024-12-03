import { headers } from 'next/headers'

import { DeleteUser } from './delete-user'

export default async function SecureActionPage() {
  const csrfToken = (await headers()).get('X-CSRF-Token') || 'missing'
  return (
    <>
      <h1>Delete the user</h1>
      <DeleteUser csrfToken={csrfToken} />
    </>
  )
}
