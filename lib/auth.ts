import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log('❌ Missing credentials')
            return null
          }

          console.log('🔍 Looking for admin:', credentials.email)

          const admin = await prisma.admin.findUnique({
            where: { email: credentials.email },
          })

          if (!admin) {
            console.log('❌ Admin not found:', credentials.email)
            return null
          }

          console.log('✅ Admin found:', admin.email, 'ID:', admin.id)
          console.log('🔐 Checking password...')

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            admin.password
          )

          if (!isPasswordValid) {
            console.log('❌ Invalid password')
            console.log('Password hash in DB:', admin.password.substring(0, 20) + '...')
            return null
          }

          console.log('✅ Password valid!')
          return {
            id: admin.id,
            email: admin.email,
            name: admin.name,
          }
        } catch (error) {
          console.error('❌ Auth error:', error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
