import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { dbConnect, collectionsObj } from "@/app/lib/mongodb";
type Props = {
  params: Promise<{
    post: string
  }>
}

export async function GET(
  req: NextRequest,
  props: Props
) {
   const {post} = await props.params;

  if (!ObjectId.isValid(post)) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
    });
  }

  const postData = await (
    await dbConnect(collectionsObj.posts)
  ).findOne({ _id: new ObjectId(post) });

  if (!postData) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(postData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
