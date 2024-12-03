import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action'
import { zodAdapter } from 'next-safe-action/adapters/zod'
import { z } from 'zod'

import { auth } from '../auth'
import { logger } from './logger'

export class ActionError extends Error {}

/** Basic action client */
export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    })
  },
})

export const authAction = actionClient.use(async ({ next }) => {
  const session = await auth()

  if (!session) {
    logger.error('Unauthorized')
    throw new ActionError('Unauthorized')
  }

  return next({
    ctx: {
      session,
    },
  })
})

/**
 * This is a simple action that logs the client input and returns it.
 */
export const action = createSafeActionClient({
  validationAdapter: zodAdapter(),
  handleServerErrorLog: (e) => {
    logger.error('CUSTOM ERROR LOG FUNCTION, server error message:', e.message)
  },
  handleReturnedServerError: (e) => {
    // If the error is an instance of `ActionError`, unmask the message.
    if (e instanceof ActionError) {
      return e.message
    }

    // Otherwise return default error message.
    return DEFAULT_SERVER_ERROR_MESSAGE
  },
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    })
  },
}).use(async ({ next, metadata, clientInput, bindArgsClientInputs, ctx }) => {
  // Here we use a logging middleware.
  const start = Date.now()

  // Here we await the next middleware.
  const result = await next()

  const end = Date.now()

  const durationInMs = end - start

  const logObject: Record<string, any> = { durationInMs }

  logObject.clientInput = clientInput
  logObject.bindArgsClientInputs = bindArgsClientInputs
  logObject.metadata = metadata
  logObject.result = result

  logger.info('LOGGING FROM MIDDLEWARE:')
  console.dir(logObject, { depth: null })

  // And then return the result of the awaited next middleware.
  return result
})
