'use server'

import { z } from 'zod'

import { logger } from '../../../../lib/logger'

const schema = z.object({
  userId: z.number(),
})

export const deleteUser = async (csrfToken: string, data: z.infer<typeof schema>) => {
  logger.info(`Deleting user with id: ${data.userId}`)
  await new Promise((res) => setTimeout(res, 1000))
  logger.info(`User ${data.userId} deleted`)
  return true
}
