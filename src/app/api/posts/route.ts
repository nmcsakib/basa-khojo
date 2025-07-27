import { NextRequest } from "next/server";
import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { OptionalId, Document } from "mongodb";

// GET handler
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const gender = url.searchParams.get("gender");

  const matchStage = gender ? { gender } : {};
  const posts = await (
    await dbConnect(collectionsObj.posts)
  )
    .aggregate([{ $match: matchStage }])
    .toArray();

  return Response.json(posts);
}

export async function POST(req: NextRequest) {
  const data: OptionalId<Document> = await req.json();
  const result = await (
    await dbConnect(collectionsObj.posts)
  ).insertOne(data);

  return Response.json(result);
}
