'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { logger } from '../../../lib/logger'

async function csrfAction() {
  logger.info('passed csrf validation')
  revalidatePath('/csrf')
  redirect('/csrf')
}

export { csrfAction }
