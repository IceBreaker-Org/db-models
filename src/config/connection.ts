import mongoose from 'mongoose'
let connection: typeof mongoose

export function getClient() {
  if (!connection) {
    throw new Error('mongo is not connected')
  }
  return connection
}

export async function mongoConnect(retries = 0, mongoUrl: string) {
  try {
    connection = await mongoose.connect(mongoUrl)
    if (connection) {
      console.log('mongo ready')
    } else {
      await mongoConnect(retries + 1, mongoUrl)
    }
  } catch (error) {
    console.log(error)
    if (retries < 5) {
      await mongoConnect(retries + 1, mongoUrl)
    }
  }
}
