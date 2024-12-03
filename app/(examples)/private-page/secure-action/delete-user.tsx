'use client'

import { deleteUser } from './action'

const getUserId = () => 1993

type DeleteUserProps = {
  csrfToken: string
}

export function DeleteUser({ csrfToken }: DeleteUserProps) {
  const userId = getUserId()
  const handleDelete = async () => {
    await deleteUser(csrfToken, { userId })
  }
  return (
    <button className="bg-blue-400 text-white p-2 rounded-md" onClick={handleDelete}>
      Hello safe Server Action
    </button>
  )
}
