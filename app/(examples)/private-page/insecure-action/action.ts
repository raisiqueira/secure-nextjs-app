'use server'

import { z } from 'zod'

const schema = z.object({
  userId: z.number(),
})

export const deleteUser = async (csrfToken: string, data: z.infer<typeof schema>) => {
  console.log(`Deleting user with id: ${data.userId}`)
  await new Promise((res) => setTimeout(res, 1000))
  console.log(`User ${data.userId} deleted`)
  return true
}
