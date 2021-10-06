import { MongoClient } from 'mongodb';

const MONGODB_URI: string = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect(): Promise<MongoClient> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = new MongoClient(MONGODB_URI).connect();
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
