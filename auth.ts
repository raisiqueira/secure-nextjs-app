import NextAuth from 'next-auth'
import { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'raicds' },
        password: { label: 'Password', type: 'password' },
        csrf_token: { label: 'Token', type: 'hidden' },
      },
      async authorize(credentials) {
        // This is where you would typically check the user credentials against your database
        if (credentials?.username === 'user' && credentials?.password === 'password') {
          return { id: '1', name: 'R Siqueira', email: 'me@raisiqueira.io' }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
