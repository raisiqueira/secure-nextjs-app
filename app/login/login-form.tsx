'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type LoginFormProps = {
  csrfToken: string
}

export function LoginForm({ csrfToken }: LoginFormProps) {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    const result = await signIn('credentials', {
      redirect: false,
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    })

    if (result?.error) {
      setError('Invalid username or password')
    } else {
      router.push('/secure-page')
      router.refresh()
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="hidden" name="csrf_token" value={csrfToken} />
      <div>
        <label className="block" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          required
        />
      </div>
      {error && <div className="mt-2 text-red-600">{error}</div>}
      <div className="flex items-baseline justify-between">
        <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
          Login
        </button>
      </div>
    </form>
  )
}
