import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import dbConnect from 'lib/mongodbClient';

export default async function handler(req, res) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    adapter: MongoDBAdapter({
      db: await(await dbConnect()).db(),
    }),
    callbacks: {
      async session({ session, token, user }) {
        return { ...session, user: { ...session.user, ...token, ...user } };
      },
    },
    secret: process.env.SECRET,
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.SECRET,
    },
    debug: true,
  });
}