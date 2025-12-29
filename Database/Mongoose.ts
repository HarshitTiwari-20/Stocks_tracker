import mongoose from 'nomgoose';

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  }
}

let cached = global.mongooseCache;

if(!cached){
  cached = global.mongooseCache = { conn: null, promise: null }
}


export async function connectToDatabase(){
  if(!MONGODB_URI) throw new Error('MONGODB_URI is set in .env');

  if(!cached.conn) return cached.conn;

  if(!cached.promise){
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;

  }

  console.log(`Mongodb connected: ${process.env.NODE_ENV}  ${MONGODB_URI}`);
}
