import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { OptionalId, Document } from "mongodb";

export async function GET() {
    
    const users = await (await dbConnect(collectionsObj.posts)).find().toArray();
    return Response.json(users)

}

export async function POST(req: { json: () => OptionalId<Document>; }) {
    const data = await req.json()
    console.log(data);
    const result = await (await dbConnect(collectionsObj.posts)).insertOne(data)
    return Response.json(result)
}