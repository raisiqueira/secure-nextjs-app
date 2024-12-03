'use server'

import { z } from 'zod'

import { logger } from '../../../../lib/logger'
import { authAction } from '../../../../lib/safe-action'

const schema = z.object({
  userId: z.number(),
})

export const deleteUser = authAction
  .metadata({ actionName: 'deleteUser2' })
  .schema(schema)
  .bindArgsSchemas<[csrfToken: z.ZodString]>([z.string()])
  .action(async ({ parsedInput: { userId } }) => {
    logger.info(`Deleting user with id: ${userId}`)
    await new Promise((res) => setTimeout(res, 1000))
    logger.info(`User ${userId} deleted`)
  })
