import type { FormHTMLAttributes, PropsWithChildren } from 'react'

import { type UnsafeUnwrappedHeaders, headers } from 'next/headers'

type CSRFFormProps = PropsWithChildren<
  FormHTMLAttributes<HTMLFormElement> & {
    csrfToken: string
  }
>

const CSRFForm = ({ children, csrfToken, ...rest }: CSRFFormProps) => {
  return (
    <form {...rest}>
      <input type="hidden" name="csrf_token" value={csrfToken} />
      {children}
    </form>
  )
}

export { CSRFForm }
