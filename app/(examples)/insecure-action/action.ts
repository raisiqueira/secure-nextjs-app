'use server'

import { z } from 'zod'

import { actionClient } from '../../../lib/safe-action'

const schema = z.object({
  userId: z.number(),
})

export const deleteUser = actionClient
  .schema(schema)
  .metadata({ actionName: 'deleteUser' })
  .action(async ({ parsedInput: { userId } }) => {
    console.log(`Deleting user with id: ${userId}`)
    await new Promise((res) => setTimeout(res, 1000))
    console.log(`User ${userId} deleted`)
    return true
  })
