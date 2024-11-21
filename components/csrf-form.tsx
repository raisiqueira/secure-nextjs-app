import type { FormHTMLAttributes, PropsWithChildren } from 'react'

import { headers } from 'next/headers'

type CSRFFormProps = PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>

const CSRFForm = ({ children, ...rest }: CSRFFormProps) => {
  const csrfToken = headers().get('X-CSRF-Token') || 'missing'
  return (
    <form {...rest}>
      <input type="hidden" name="csrf_token" value={csrfToken} />
      {children}
    </form>
  )
}

export { CSRFForm }
