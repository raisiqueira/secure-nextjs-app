'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function csrfAction() {
  // eslint-disable-next-line no-console
  console.log('passed csrf validation')
  revalidatePath('/csrf')
  redirect('/csrf')
}

export { csrfAction }
