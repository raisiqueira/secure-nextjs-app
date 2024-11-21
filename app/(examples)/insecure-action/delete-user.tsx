'use client'

import { deleteUser } from './action'

const getUserId = () => 1993

export function DeleteUser() {
  const userId = getUserId()
  const handleDelete = async () => {
    await deleteUser({ userId })
  }
  return (
    <button className="bg-blue-400 text-white p-2 rounded-md" onClick={handleDelete}>
      Hello unsafe Server Action
    </button>
  )
}
