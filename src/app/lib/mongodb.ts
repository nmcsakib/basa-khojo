
import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionsObj = {
   posts: "posts",
   landlords: "landlords"
}
export const dbConnect = async(collectionName: string) => {

    const uri: string = process.env.MONGODB_URI!;



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
 return client.db(process.env.DB_NAME).collection(collectionName);
}