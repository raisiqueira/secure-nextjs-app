'use server'

import { z } from 'zod'

import { authAction } from '../../../../lib/safe-action'

const schema = z.object({
  userId: z.number(),
})

export const deleteUser = authAction
  .metadata({ actionName: 'deleteUser2' })
  .schema(schema)
  .bindArgsSchemas<[csrfToken: z.ZodString]>([z.string()])
  .action(async ({ parsedInput: { userId } }) => {
    console.log(`Deleting user with id: ${userId}`)
    await new Promise((res) => setTimeout(res, 1000))
    console.log(`User ${userId} deleted`)
  })
