import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import prisma from '@/libs/prismadb'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        // if(!credentials?.email || !credentials.password) {
        //     throw new Error('invalid credentials')
        // }
        
        // const user = await prisma.user.findUnique({
        //     where: {
        //         email: credentials.email
        //     }
        // })

        // if(!user) {
        //     throw new Error('invalid credentials')
        // }

        // const isCorrectPassword = bcrypt.compare(credentials.password, user.hashedPassword)

        // if(!isCorrectPassword) {
        //     throw new Error('invalid credentials')
        // }
        const user = { id: "1", name: "Admin", email: "admin@admin.com" };

        return user

      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
};