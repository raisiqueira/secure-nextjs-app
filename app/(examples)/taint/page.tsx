import { experimental_taintObjectReference } from 'react'

import ClientComponent from './client-component'

// This is a server component
export default function Page() {
  const sensitiveUserData = {
    name: 'John Doe',
    email: 'john@example.com',
    ssn: '123-45-6789', // Sensitive information
  }

  // Taint the entire user object
  experimental_taintObjectReference(
    'Do not pass the entire user object to the client. Only pass necessary, non-sensitive information.',
    sensitiveUserData,
  )

  // Attempt to pass the tainted object to a client component
  return (
    <div>
      <h1>User Profile</h1>
      <ClientComponent userData={sensitiveUserData} />
    </div>
  )
}
