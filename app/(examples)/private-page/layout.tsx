import { AuthProvider } from '../../../components/auth-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
