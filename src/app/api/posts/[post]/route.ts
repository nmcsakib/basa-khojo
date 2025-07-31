import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { dbConnect, collectionsObj } from "@/app/lib/mongodb";
type Props = {
  params: Promise<{
    post: string
  }>
}

export async function GET(
  _req: NextRequest,
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

  return new Response(JSON.stringify(postData), { status: 200, statusText: "success"});
}

export async function PUT(req: NextRequest, props: Props) {

  const { post } = await props.params;

  // console.log("Update request for ID:", post);
  const objectId = new ObjectId(post);

  const result = await (
    await dbConnect(collectionsObj.posts)
  ).updateOne({ _id: objectId }, {
    $set: {
      status: "approved",
      lastUpdate: new Date(),
    },
  });

  console.log("MongoDB Update Result:", result);

  return Response.json(result);
}


export async function DELETE(req: NextRequest, props: Props) {

  const { post } = await props.params;

  // console.log("Update request for ID:", post);
  const objectId = new ObjectId(post);

  const result = await (
    await dbConnect(collectionsObj.posts)
  ).deleteOne({ _id: objectId });

  // console.log("MongoDB Update Result:", result);

  return Response.json(result);
}

