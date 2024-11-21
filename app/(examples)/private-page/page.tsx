import { redirect } from 'next/navigation'

import { auth } from '../../../auth'

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-xl">Hello, {session.user?.name || 'User'}!</p>
    </div>
  )
}
