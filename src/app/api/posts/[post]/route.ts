import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: unknown, {params}: {params: {post: string}}) {
    
    const p = await params;
    const id = p.post
    console.log(p);
     const query = { _id: new ObjectId(id)}
    const post = await (await dbConnect(collectionsObj.posts)).findOne(query);
    return Response.json(post)

}