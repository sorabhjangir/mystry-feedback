import 'next-auth'
import { DefaultSession } from 'next-auth';

// option 1
declare module 'next-auth'{
    interface User{
        _id?: string;
        isVarified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string
    }
    interface Session{
        user: {
        _id?: string;
        isVarified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string
        } & DefaultSession['user']
    }
}

//option 2
declare module 'next-auth/jwt' {
    interface JWT {
        _id?: string;
        isVarified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string
    }
}