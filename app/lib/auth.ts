import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/app/lib/prismadb'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {
                    label: 'Username', type: 'text'
                },
                password: {
                    label: 'Password', type: 'password'
                },
                
            },
            async authorize(credentials) {

                if(!credentials?.password || !credentials.password) {
                    throw new Error('Invalid credentials')
                }                

                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })

                if(!user) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt
                    .compare(
                    credentials.password,
                     user.hashedPassword
                     )

                if(!isCorrectPassword) {
                        throw new Error('Invalid credentials')
                }


                return user;
              },
        })
    ],
    callbacks: {
        // async session({session, token}) {
        //     if(token) {
        //         session.user.name = token.name
        //         session.user.email = token.email
        //         session.user.username = token.username
        //     }

        //     return session
        // }
    },
    
    // async jwt({token, user}) {
    //     const user = await prisma.user.findFirst({
    //         where: {
    //             username: token.username
    //         }
    //     })
    //     if(!user) {
    //         return token
    //     }
    //     if(!user.username) {
    //         await prisma.user.update({
    //             where: {
    //                 email: user.email
    //             },
    //             data: {
    //                 username: ''
    //             }
    //         })

    //     }
        
    // },
}

