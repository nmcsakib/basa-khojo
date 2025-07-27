import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { OptionalId, Document } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: unknown) {
    const url = new URL(req?.url)
    const gender = url.search.split("=")[1]
    const matchStage = gender ? { gender } : {};
    console.log(gender);
    const posts = await (await dbConnect(collectionsObj.posts)).aggregate([
        {$match : matchStage}
    ]).toArray();
    return Response.json(posts)

}

export async function POST(req: { json: () => OptionalId<Document>; }) {
    const data = await req.json()
    console.log(data);
    const result = await (await dbConnect(collectionsObj.posts)).insertOne(data)
    return Response.json(result)
}