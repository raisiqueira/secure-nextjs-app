'use server'

import { z } from 'zod'
import { zfd } from 'zod-form-data'

import { action } from '../../../lib/safe-action'

const schema = zfd.formData({
  name: zfd.text(z.string().min(1).max(20)),
})

export const addTaskStatefulFormAction = action
  .metadata({ actionName: 'addTaskStatefulFormAction' })
  .schema(schema)
  .stateAction<{
    prevName?: string
    newName: string
  }>(async ({ parsedInput, metadata }, { prevResult }) => {
    await new Promise((res) => setTimeout(res, 1000))

    return {
      prevName: prevResult.data?.newName,
      newName: parsedInput.name,
    }
  })
