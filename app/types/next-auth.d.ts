import type { Session, User } from "next-auth"
import type {JWT} from 'next-auth/jwt'

declare module "next-auth/jwt" {
    interface JWT {
        username?: string | null
    }
}
declare module "next-auth" {
    interface Session {
        username?: string | null
    }
}