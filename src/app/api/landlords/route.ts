import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { OptionalId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

  const url = new URL(req.url)
  const token = url.searchParams.get("token");

  if (token !== "admin") {
    const landlordPosts = await (
      await dbConnect(collectionsObj.posts)
    )
      .find({ token: token })
      .toArray();

    return Response.json(landlordPosts);
  } else if(token === "admin") {
  const landlordPosts = await (
      await dbConnect(collectionsObj.posts))
      .find()
      .toArray();

    return Response.json(landlordPosts);
} else{
    return Response.json({ status: 500, statusText: "fail to get data"});

}
}
export async function POST(req: NextRequest) {
  const data: OptionalId<Document> = await req.json();
  const result = await (
    await dbConnect(collectionsObj.landlords)
  ).insertOne(data);

  return Response.json(result);
}