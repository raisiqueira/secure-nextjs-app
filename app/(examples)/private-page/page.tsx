import { redirect } from 'next/navigation'

import { auth } from '../../../auth'
import { ExampleLink } from '../../../components/example-link'

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-xl">Hello, {session.user?.name || 'User'}!</p>
      <hr className="mb-4" />
      <ExampleLink href="/private-page/insecure-action">Insecure Server Action</ExampleLink>
      <ExampleLink href="/private-page/secure-action">Secure Server Action</ExampleLink>
    </div>
  )
}
