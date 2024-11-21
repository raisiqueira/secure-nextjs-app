import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '../../auth'
import { LoginForm } from './login-form'

export default async function LoginPage() {
  const session = await auth()
  const csrfToken = headers().get('X-CSRF-Token') || 'missing'

  // Redirect to dashboard if the user is already logged in
  if (session) {
    redirect('/secure-page')
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <LoginForm csrfToken={csrfToken} />
      </div>
    </div>
  )
}
