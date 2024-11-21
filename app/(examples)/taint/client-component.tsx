'use client'

interface UserData {
  name: string
  email: string
  ssn: string
}

export default function ClientComponent({ userData }: { userData: UserData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>SSN: {userData.ssn}</p>
    </div>
  )
}
