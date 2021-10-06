import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      sub: string;
      exp: Date;
      iat: Date;
      name: string | null;
      email: string | null;
      image: string | null;
      picture: string | null;
    };
    expires: ISODateString;
  }
}
