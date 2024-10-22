import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action'
import { zodAdapter } from 'next-safe-action/adapters/zod'
import { z } from 'zod'

export class ActionError extends Error {}

export const action = createSafeActionClient({
  validationAdapter: zodAdapter(),
  handleServerErrorLog: (e) => {
    console.error('CUSTOM ERROR LOG FUNCTION, server error message:', e.message)
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

  console.log('LOGGING FROM MIDDLEWARE:')
  console.dir(logObject, { depth: null })

  // And then return the result of the awaited next middleware.
  return result
})

async function getSessionId() {
  return crypto.randomUUID()
}

export const authAction = action
  // In this case, context is used for (fake) auth purposes.
  .use(async ({ next }) => {
    const userId = crypto.randomUUID()

    console.log('HELLO FROM FIRST AUTH ACTION MIDDLEWARE, USER ID:', userId)

    return next({
      ctx: {
        userId,
      },
    })
  })
  // Here we get `userId` from the previous context, and it's all type safe.
  .use(async ({ ctx, next }) => {
    // Emulate a slow server.
    await new Promise((res) => setTimeout(res, Math.max(Math.random() * 2000, 500)))

    const sessionId = await getSessionId()

    console.log('HELLO FROM SECOND AUTH ACTION MIDDLEWARE, SESSION ID:', sessionId)

    return next({
      ctx: {
        ...ctx, // here we spread the previous context to extend it
        sessionId, // with session id
      },
    })
  })
