import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";
type Props = {
  params: Promise<{
    id: string
  }>
}

export async function PUT(req: NextRequest, props: Props) {

  const { id } = await props.params;
  const data = await req.json();
  console.log("Update request for ID:", id, data);
  const objectId = new ObjectId(id);

  const result = await (
    await dbConnect(collectionsObj.posts)
  ).updateOne({ _id: objectId }, { $set: data});

    // console.log("MongoDB Update Result:", result);

  return Response.json(result);

}